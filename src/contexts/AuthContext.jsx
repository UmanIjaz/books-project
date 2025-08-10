import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadInitialSession() {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error("Get session error:", error.message);
          setError("Failed to get session.");
        }

        setSession(data.session);
        setUser(data.session?.user ?? null);
      } catch (err) {
        console.error("Session load error:", err.message);
        setError("Failed to load session. Try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    loadInitialSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => {
        if (nextSession?.user?.id !== session?.user?.id) {
          setSession(nextSession);
          setUser(nextSession?.user ?? null);
        }
      }
    );

    return () => {
      listener.subscription?.unsubscribe?.();
    };
  }, []);

  // async function fetchUserData(id) {
  //   try {
  //     const { data, error } = await supabase
  //       .from("users")
  //       .select("*")
  //       .eq("id", id)
  //       .single();

  //     if (error) {
  //       console.error("User fetch error:", error.message);
  //       setError("Could not load your profile.");
  //     } else {
  //       setUser(data);
  //     }
  //   } catch (err) {
  //     console.error("Fetch user error:", err.message);
  //     setError("Something went wrong while loading user info.");
  //   }
  // }

  //Sign-up
  async function register({ email, password }) {
    try {
      if (!navigator.onLine) {
        return { success: false, error: "Check your internet connection." };
      }

      const { data, error: signupError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signupError) {
        return { success: false, error: signupError.message };
      }

      const isPendingConfirmation =
        !data.session && data.user && data.user.identities.length === 0;

      if (isPendingConfirmation) {
        return {
          success: false,
          error:
            "Email already exists or confirmation is pending. Please check your inbox or log in.",
        };
      }

      const userId = data.user.id;

      // Optional: insert into public.users
      // const { error: insertError } = await supabase.from("users").insert({
      //   id: userId,
      //   name,
      // });

      // if (insertError) {
      //   const isConflict =
      //     insertError.code === "23505" || insertError.status === 429;

      //   const message = isConflict
      //     ? "User already exists. Please log in instead."
      //     : "User created but failed to save profile.";

      //   return { success: false, error: message };
      // }

      return {
        success: true,
        message:
          "Signup successful! Please check your email to confirm your account.",
      };
    } catch (err) {
      const isOffline =
        !navigator.onLine ||
        (err instanceof TypeError && err.message === "Failed to fetch");

      const message = isOffline
        ? "You're offline. Please check your internet connection."
        : "Something went wrong. Please try again later.";

      return { success: false, error: message };
    }
  }

  //LOGIN
  async function login({ email, password }) {
    try {
      if (!navigator.onLine) {
        return {
          success: false,
          error: "You're offline. Please check your internet connection.",
        };
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { success: false, error: error.message };
      }

      // Optional: You can directly return the user or session if needed
      return { success: true, session: data.session, user: data.user };
    } catch (err) {
      const isOffline =
        !navigator.onLine ||
        (err instanceof TypeError && err.message === "Failed to fetch");

      const message = isOffline
        ? "You're offline. Please check your internet connection."
        : "Something went wrong. Please try again later.";

      return { success: false, error: message };
    }
  }

  // LOGOUT
  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) return { success: false, error };

    setSession(null);
    setUser(null);

    return { success: true };
  }

  return (
    <AuthContext.Provider
      value={{ session, user, isLoading, error, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
