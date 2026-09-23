import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Head } from "@inertiajs/react";
import { BadgeCheck, MapPinned, TimerReset, UserCheck } from "lucide-react";

const attendanceToday = [
    {
        name: "Budi Santoso",
        site: "North Pit",
        status: "Present",
        time: "06:02",
        type: "Clock-in",
    },
    {
        name: "Andi Pratama",
        site: "Processing",
        status: "Late",
        time: "06:18",
        type: "Clock-in",
    },
    {
        name: "Eko Sulistyo",
        site: "Maintenance",
        status: "On Duty",
        time: "07:05",
        type: "Field check",
    },
    {
        name: "Dewi Lestari",
        site: "Camp Support",
        status: "Absent",
        time: "-",
        type: "Leave",
    },
];

const stats = [
    { label: "Present", value: "812", tone: "bg-emerald-500" },
    { label: "Late", value: "24", tone: "bg-amber-500" },
    { label: "Absent", value: "18", tone: "bg-rose-500" },
    { label: "Leave", value: "31", tone: "bg-sky-500" },
];

export default function Attendance() {
    return (
        <>
            <Head title="Attendance" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">
                            Workforce control
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight">
                            Attendance
                        </h1>
                    </div>
                    <Badge className="w-fit bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                        Today: 96.4%
                    </Badge>
                </div>

                <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {stats.map((item) => (
                        <Card key={item.label}>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {item.label}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-between gap-3">
                                <span className="text-2xl font-semibold">
                                    {item.value}
                                </span>
                                <span
                                    className={`h-3 w-3 rounded-full ${item.tone}`}
                                />
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Attendance log</CardTitle>
                            <CardDescription>
                                Latest attendance records by crew
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {attendanceToday.map((person) => (
                                <div
                                    key={person.name}
                                    className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-3 dark:border-slate-800"
                                >
                                    <div>
                                        <p className="font-medium text-foreground">
                                            {person.name}
                                        </p>
                                        <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                            <span className="inline-flex items-center gap-1">
                                                <MapPinned className="h-3.5 w-3.5" />
                                                {person.site}
                                            </span>
                                            <span className="inline-flex items-center gap-1">
                                                <TimerReset className="h-3.5 w-3.5" />
                                                {person.time}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge
                                            className={
                                                person.status === "Present"
                                                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                                                    : person.status === "Late"
                                                      ? "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
                                                      : person.status ===
                                                          "On Duty"
                                                        ? "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300"
                                                        : "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300"
                                            }
                                        >
                                            {person.status}
                                        </Badge>
                                        <p className="mt-2 text-xs text-muted-foreground">
                                            {person.type}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Desk checks</CardTitle>
                            <CardDescription>
                                Operational attendance control
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-900/40">
                                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <UserCheck className="h-4 w-4 text-emerald-600" />
                                    Verified in field: 89%
                                </div>
                            </div>
                            <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-900/40">
                                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <BadgeCheck className="h-4 w-4 text-sky-600" />
                                    GPS attendance checks: 74%
                                </div>
                            </div>
                            <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
                                6 devices require synchronization today.
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </>
    );
}
