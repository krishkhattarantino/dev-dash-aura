
import { useState } from "react";
import { Calendar as CalendarIcon, Search, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface FilterOption {
  value: string;
  label: string;
}

const teams: FilterOption[] = [
  { value: "all", label: "All Teams" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "mobile", label: "Mobile" },
  { value: "devops", label: "DevOps" },
];

const resourceManagers: FilterOption[] = [
  { value: "all", label: "All RMs" },
  { value: "alice", label: "Alice Jones" },
  { value: "bob", label: "Bob Smith" },
  { value: "carol", label: "Carol Lee" },
];

const projects: FilterOption[] = [
  { value: "all", label: "All Projects" },
  { value: "project-a", label: "Project A" },
  { value: "project-b", label: "Project B" },
  { value: "project-c", label: "Project C" },
];

const skills: FilterOption[] = [
  { value: "all", label: "All Skills" },
  { value: "react", label: "React" },
  { value: "node", label: "Node.js" },
  { value: "python", label: "Python" },
  { value: "aws", label: "AWS" },
];

interface DateRange {
  from: Date;
  to?: Date;
}

export function Header() {
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: new Date(new Date().setMonth(new Date().getMonth() + 1)),
  });

  const [team, setTeam] = useState<string>("all");
  const [rm, setRm] = useState<string>("all");
  const [project, setProject] = useState<string>("all");
  const [skill, setSkill] = useState<string>("all");

  const resetFilters = () => {
    setTeam("all");
    setRm("all");
    setProject("all");
    setSkill("all");
    setDate({
      from: new Date(),
      to: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    });
  };

  const hasFilters = team !== "all" || rm !== "all" || project !== "all" || skill !== "all";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Team Filter */}
          <Select value={team} onValueChange={setTeam}>
            <SelectTrigger className="w-[160px] h-9">
              <SelectValue placeholder="Team" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {teams.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* RM Filter */}
          <Select value={rm} onValueChange={setRm}>
            <SelectTrigger className="w-[160px] h-9">
              <SelectValue placeholder="Resource Manager" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {resourceManagers.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Project Filter */}
          <Select value={project} onValueChange={setProject}>
            <SelectTrigger className="w-[160px] h-9">
              <SelectValue placeholder="Project" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {projects.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Skill Filter */}
          <Select value={skill} onValueChange={setSkill}>
            <SelectTrigger className="w-[160px] h-9">
              <SelectValue placeholder="Skill" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {skills.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Date Range Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[240px] justify-start text-left font-normal h-9",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                initialFocus
                mode="range"
                selected={date}
                onSelect={(newDate) => setDate(newDate as DateRange)}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>

          {/* Clear Filters Button */}
          {hasFilters && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={resetFilters}
              className="h-9 w-9"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Search */}
        <div className="ml-4 flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="w-[200px] rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
