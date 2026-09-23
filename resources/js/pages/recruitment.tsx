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
    ClipboardList,
    Users,
} from "lucide-react";

const recruitmentMetrics = [
    { label: "Open vacancies", value: "18", icon: BriefcaseBusiness },
    { label: "Interview stage", value: "24", icon: ClipboardList },
    { label: "Offers pending", value: "9", icon: CheckCircle2 },
    { label: "Hired this month", value: "36", icon: Users },
];

const candidates = [
    {
        name: "Ayu Lestari",
        role: "Operator",
        stage: "Interview",
        status: "Scheduled",
    },
    {
        name: "Reza Pratama",
        role: "Supervisor",
        stage: "Technical test",
        status: "In progress",
    },
    {
        name: "Dinda Putri",
        role: "HSE Officer",
        stage: "Offer review",
        status: "Pending",
    },
    {
        name: "Fadli Rahman",
        role: "Mechanic",
        stage: "Background check",
        status: "On track",
    },
];

export default function Recruitment() {
    return (
        <>
            <Head title="Recruitment" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">
                            Talent acquisition
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight">
                            Recruitment
                        </h1>
                    </div>
                    <Badge className="w-fit bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                        18 vacancies active
                    </Badge>
                </div>

                <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {recruitmentMetrics.map(({ label, value, icon: Icon }) => (
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
                                <Icon className="h-5 w-5 text-emerald-600" />
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <Card>
                    <CardHeader>
                        <CardTitle>Candidate pipeline</CardTitle>
                        <CardDescription>
                            Hiring funnel across recruitment stages in active
                            sites
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {candidates.map((candidate) => (
                            <div
                                key={candidate.name}
                                className="flex flex-col gap-3 rounded-xl border border-slate-200 p-3 md:flex-row md:items-center md:justify-between dark:border-slate-800"
                            >
                                <div>
                                    <p className="font-medium text-foreground">
                                        {candidate.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {candidate.role} · {candidate.stage}
                                    </p>
                                </div>
                                <Badge
                                    className={
                                        candidate.status === "Scheduled"
                                            ? "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300"
                                            : candidate.status === "In progress"
                                              ? "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
                                              : candidate.status === "Pending"
                                                ? "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300"
                                                : "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                                    }
                                >
                                    {candidate.status}
                                </Badge>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
