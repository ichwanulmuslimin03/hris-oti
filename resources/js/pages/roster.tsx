import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Head } from "@inertiajs/react";
import { CalendarDays, Clock3, Users } from "lucide-react";

type RosterEntry = {
    day: string;
    shift: string;
    crew: string;
    coverage: string;
    status: string;
};

export default function Roster({ roster = [] }: { roster?: RosterEntry[] }) {
    return (
        <>
            <Head title="Roster" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">
                            Operational planning
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight">
                            Roster
                        </h1>
                    </div>
                    <Badge className="w-fit bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
                        5 shifts scheduled
                    </Badge>
                </div>

                <section className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Assigned workforce
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">
                                1,123
                            </span>
                            <Users className="h-5 w-5 text-sky-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Shift coverage
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">94%</span>
                            <CalendarDays className="h-5 w-5 text-emerald-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Night shift
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">84</span>
                            <Clock3 className="h-5 w-5 text-amber-600" />
                        </CardContent>
                    </Card>
                </section>

                <Card>
                    <CardHeader>
                        <CardTitle>Weekly roster</CardTitle>
                        <CardDescription>
                            Roster assignment and coverage by day
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {roster.map((item) => (
                            <div
                                key={item.day}
                                className="flex flex-col gap-3 rounded-xl border border-slate-200 p-3 md:flex-row md:items-center md:justify-between dark:border-slate-800"
                            >
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        {item.day}
                                    </p>
                                    <p className="font-medium text-foreground">
                                        {item.shift}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">
                                        {item.crew}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Coverage: {item.coverage}
                                    </p>
                                </div>
                                <Badge
                                    className={
                                        item.status === "On track"
                                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                                            : item.status === "Watchlist"
                                              ? "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
                                              : "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300"
                                    }
                                >
                                    {item.status}
                                </Badge>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
