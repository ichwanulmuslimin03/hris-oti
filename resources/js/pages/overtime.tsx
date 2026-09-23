import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Head } from "@inertiajs/react";
import { AlertCircle, Clock3, ShieldCheck, TrendingUp } from "lucide-react";

const overtimeData = [
    {
        name: "Riko Wibowo",
        department: "Mining",
        hours: "12h",
        status: "Approved",
    },
    {
        name: "Aji Prasetyo",
        department: "Maintenance",
        hours: "8h",
        status: "Review",
    },
    {
        name: "Imam Nugroho",
        department: "Processing",
        hours: "7h",
        status: "Pending",
    },
    {
        name: "Sinta Dewi",
        department: "Camp Support",
        hours: "10h",
        status: "Approved",
    },
];

export default function Overtime() {
    return (
        <>
            <Head title="Overtime" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">
                            Workload management
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight">
                            Overtime
                        </h1>
                    </div>
                    <Badge className="w-fit bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                        38.6h total this week
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
                            <span className="text-2xl font-semibold">26</span>
                            <ShieldCheck className="h-5 w-5 text-emerald-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Pending
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">8</span>
                            <Clock3 className="h-5 w-5 text-amber-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Average hours
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">9.2h</span>
                            <TrendingUp className="h-5 w-5 text-sky-600" />
                        </CardContent>
                    </Card>
                </section>

                <Card>
                    <CardHeader>
                        <CardTitle>Overtime requests</CardTitle>
                        <CardDescription>
                            Approval queue for additional hours
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {overtimeData.map((item) => (
                            <div
                                key={item.name}
                                className="flex flex-col gap-3 rounded-xl border border-slate-200 p-3 md:flex-row md:items-center md:justify-between dark:border-slate-800"
                            >
                                <div>
                                    <p className="font-medium text-foreground">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {item.department}
                                    </p>
                                </div>
                                <p className="font-semibold text-foreground">
                                    {item.hours}
                                </p>
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

                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
                    <div className="flex items-center gap-2 font-medium">
                        <AlertCircle className="h-4 w-4" />
                        Overtime threshold crossed at Site A, review allocation
                        plan.
                    </div>
                </div>
            </div>
        </>
    );
}
