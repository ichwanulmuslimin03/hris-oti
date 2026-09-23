import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Head } from "@inertiajs/react";
import { CalendarRange, Clock3, FileText, PlaneTakeoff } from "lucide-react";

const leaveData = [
    {
        name: "Dewi Lestari",
        type: "Annual leave",
        days: "5 days",
        status: "Approved",
    },
    {
        name: "Fajar Hidayat",
        type: "Sick leave",
        days: "3 days",
        status: "Review",
    },
    {
        name: "Rahmat Kurnia",
        type: "Emergency leave",
        days: "2 days",
        status: "Approved",
    },
    {
        name: "Sari Wulandari",
        type: "Maternity leave",
        days: "90 days",
        status: "Pending",
    },
];

export default function Leave() {
    return (
        <>
            <Head title="Leave" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">
                            Employee requests
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight">
                            Leave & Permit
                        </h1>
                    </div>
                    <Badge className="w-fit bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
                        18 requests this month
                    </Badge>
                </div>

                <section className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Approved
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">11</span>
                            <FileText className="h-5 w-5 text-emerald-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Pending
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">5</span>
                            <Clock3 className="h-5 w-5 text-amber-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Vacation balance
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">18d</span>
                            <PlaneTakeoff className="h-5 w-5 text-sky-600" />
                        </CardContent>
                    </Card>
                </section>

                <Card>
                    <CardHeader>
                        <CardTitle>Leave requests</CardTitle>
                        <CardDescription>
                            Latest leave and permit approval status
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {leaveData.map((item) => (
                            <div
                                key={item.name}
                                className="flex flex-col gap-3 rounded-xl border border-slate-200 p-3 md:flex-row md:items-center md:justify-between dark:border-slate-800"
                            >
                                <div>
                                    <p className="font-medium text-foreground">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {item.type}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CalendarRange className="h-4 w-4" />
                                    {item.days}
                                </div>
                                <Badge
                                    className={
                                        item.status === "Approved"
                                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                                            : item.status === "Review"
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
