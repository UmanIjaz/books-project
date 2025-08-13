import { FiBook, FiBookOpen, FiUsers } from "react-icons/fi";
import { cn } from "@/utils/cn";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/46.jpg",
  "https://randomuser.me/api/portraits/women/47.jpg",
];

function StatsCards() {
  return (
    <section
      className={cn(
        "grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6",
        "bg-surface rounded-lg shadow-card p-6 w-full mx-auto",
        "max-[900px]:grid-cols-[repeat(auto-fill,minmax(184px,1fr))] max-[900px]:p-7",
        "max-[480px]:p-5"
      )}
    >
      {/* Books Read */}
      <div
        className={cn(
          "flex items-center gap-4 h-[84px] rounded-lg p-4 bg-surface",
          "max-[900px]:h-auto max-[900px]:gap-3 max-[900px]:p-2 max-[900px]:px-4",
          "max-[480px]:items-start"
        )}
      >
        <div
          className={cn(
            "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0",
            "max-[900px]:w-[54px] max-[900px]:h-[54px]",
            "max-[480px]:w-12 max-[480px]:h-12"
          )}
        >
          <FiBook
            className={cn("text-3xl text-primary", "max-[900px]:text-2xl")}
          />
        </div>
        <div
          className={cn(
            "flex flex-col justify-center min-w-0",
            "max-[480px]:items-start"
          )}
        >
          <span
            className={cn(
              "text-muted text-sm font-medium",
              "max-[900px]:text-sm"
            )}
          >
            Books Read
          </span>
          <span
            className={cn(
              "text-foreground text-2xl font-bold leading-tight",
              "max-[900px]:text-xl"
            )}
          >
            127
          </span>
          <span
            className={cn(
              "text-muted text-xs font-medium",
              "max-[900px]:text-xs"
            )}
          >
            +5 this week
          </span>
        </div>
      </div>

      {/* Currently Reading */}
      <div
        className={cn(
          "flex items-center gap-4 h-[84px] rounded-lg p-4 bg-surface",
          "max-[900px]:h-auto max-[900px]:gap-3 max-[900px]:p-2 max-[900px]:px-4",
          "max-[480px]:items-start"
        )}
      >
        <div
          className={cn(
            "w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0",
            "max-[900px]:w-[54px] max-[900px]:h-[54px]",
            "max-[480px]:w-12 max-[480px]:h-12"
          )}
        >
          <FiBookOpen
            className={cn("text-3xl text-accent", "max-[900px]:text-2xl")}
          />
        </div>
        <div
          className={cn(
            "flex flex-col justify-center min-w-0",
            "max-[480px]:items-start"
          )}
        >
          <span
            className={cn(
              "text-muted text-sm font-medium",
              "max-[900px]:text-sm"
            )}
          >
            Currently Reading
          </span>
          <span
            className={cn(
              "text-foreground text-2xl font-bold leading-tight",
              "max-[900px]:text-xl"
            )}
          >
            3
          </span>
          <span
            className={cn(
              "text-muted text-xs font-medium",
              "max-[900px]:text-xs"
            )}
          >
            avg. 2.5 hrs/day
          </span>
        </div>
      </div>

      {/* Reading Community */}
      <div
        className={cn(
          "flex items-center gap-4 h-[84px] rounded-lg p-4 bg-surface",
          "max-[900px]:h-auto max-[900px]:gap-3 max-[900px]:p-2 max-[900px]:px-4",
          "max-[480px]:items-start"
        )}
      >
        <div
          className={cn(
            "w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0",
            "max-[900px]:w-[54px] max-[900px]:h-[54px]",
            "max-[480px]:w-12 max-[480px]:h-12"
          )}
        >
          <FiUsers
            className={cn("text-3xl text-green-600", "max-[900px]:text-2xl")}
          />
        </div>
        <div
          className={cn(
            "flex flex-col justify-center min-w-0",
            "max-[480px]:items-start"
          )}
        >
          <span
            className={cn(
              "text-muted text-sm font-medium",
              "max-[900px]:text-sm"
            )}
          >
            Reading Circle
          </span>
          <span
            className={cn(
              "text-foreground text-2xl font-bold leading-tight",
              "max-[900px]:text-xl"
            )}
          >
            {avatars.length}+
          </span>
          <div
            className={cn(
              "flex items-center mt-1 -space-x-3",
              "max-[900px]:-space-x-2",
              "max-[480px]:-space-x-2"
            )}
          >
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Reader ${i + 1}`}
                className={cn(
                  "w-8 h-8 rounded-full border-2 border-surface object-cover",
                  "shadow-sm bg-gray-100",
                  "max-[900px]:w-7 max-[900px]:h-7",
                  "max-[480px]:w-6 max-[480px]:h-6"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsCards;
