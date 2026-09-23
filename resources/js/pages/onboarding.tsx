import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Head } from "@inertiajs/react";
import {
    BriefcaseBusiness,
    CheckCircle2,
    FileText,
    ShieldCheck,
    UserRoundCheck,
} from "lucide-react";

const onboardingMetrics = [
    { label: "Ready to start", value: "82%", icon: UserRoundCheck },
    { label: "Documents complete", value: "91%", icon: FileText },
    { label: "Safety induction", value: "76%", icon: ShieldCheck },
    { label: "Hired this week", value: "12", icon: BriefcaseBusiness },
];

const tasks = [
    { item: "Employment contract & ID", status: "Completed", tone: "emerald" },
    { item: "Medical check", status: "In review", tone: "amber" },
    { item: "HSE induction", status: "Scheduled", tone: "sky" },
    { item: "IT account & access card", status: "Pending", tone: "rose" },
];

export default function Onboarding() {
    return (
        <>
            <Head title="Onboarding" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">
                            Workforce readiness
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight">
                            Onboarding
                        </h1>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Employee readiness
                        </p>
                    </div>
                    <Badge className="w-fit bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
                        12 new hires in progress
                    </Badge>
                </div>

                <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {onboardingMetrics.map(({ label, value, icon: Icon }) => (
                        <Card key={label}>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm text-muted-foreground">
                                    {label}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-between gap-3">
                                <span className="text-2xl font-semibold">
                                    {value}
                                </span>
                                <Icon className="h-5 w-5 text-sky-600" />
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <Card>
                    <CardHeader>
                        <CardTitle>Employee readiness</CardTitle>
                        <CardDescription>
                            Onboarding checklist and document completion by
                            incoming employee
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {tasks.map((task) => (
                            <div
                                key={task.item}
                                className="flex flex-col gap-3 rounded-xl border border-slate-200 p-3 md:flex-row md:items-center md:justify-between dark:border-slate-800"
                            >
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                    <p className="font-medium text-foreground">
                                        {task.item}
                                    </p>
                                </div>
                                <Badge
                                    className={
                                        task.tone === "emerald"
                                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                                            : task.tone === "amber"
                                              ? "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
                                              : task.tone === "sky"
                                                ? "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300"
                                                : "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300"
                                    }
                                >
                                    {task.status}
                                </Badge>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
