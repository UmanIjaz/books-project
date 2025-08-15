import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import { cn } from "@/utils/cn";

function ReadingPage() {
  //This bookContinued is for now, as there is no book to be continued, later this logic will be replaced by actual book fetching logic
  const bookContinued = true;
  const navigate = useNavigate();

  //Handle route navigation
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div
      className={cn({
        "flex flex-col items-center justify-start p-8": bookContinued,
      })}
    >
      <h1 className="page-heading-lg">Start Reading</h1>
      <p className="text-body">Nothing in current reading list.</p>
      <Button onClick={() => handleNavigation("/")}>Explore Books</Button>
    </div>
  );
}

export default ReadingPage;
