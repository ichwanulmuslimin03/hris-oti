import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Head } from "@inertiajs/react";
import { ArrowUpRight, Award, Target, TrendingUp } from "lucide-react";

const performanceRows = [
    { name: "Budi Santoso", team: "Mining", score: "92%", status: "Excellent" },
    { name: "Rina Fitri", team: "HSE", score: "88%", status: "Strong" },
    {
        name: "Hasanudin",
        team: "Maintenance",
        score: "81%",
        status: "On track",
    },
    { name: "Maya Putri", team: "HR", score: "90%", status: "Excellent" },
];

export default function Performance() {
    return (
        <>
            <Head title="Performance" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">
                            People performance
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight">
                            Performance KPI
                        </h1>
                    </div>
                    <Badge className="w-fit bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                        Team score 86.4%
                    </Badge>
                </div>

                <section className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Target achievement
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">86%</span>
                            <Target className="h-5 w-5 text-emerald-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Improvement
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">
                                +5.8%
                            </span>
                            <TrendingUp className="h-5 w-5 text-sky-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Top performer
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">92%</span>
                            <Award className="h-5 w-5 text-amber-600" />
                        </CardContent>
                    </Card>
                </section>

                <Card>
                    <CardHeader>
                        <CardTitle>Performance scorecard</CardTitle>
                        <CardDescription>
                            Key indicators by team and employee
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {performanceRows.map((row) => (
                            <div
                                key={row.name}
                                className="flex flex-col gap-3 rounded-xl border border-slate-200 p-3 md:flex-row md:items-center md:justify-between dark:border-slate-800"
                            >
                                <div>
                                    <p className="font-medium text-foreground">
                                        {row.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {row.team}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                                    {row.score}
                                </div>
                                <Badge
                                    className={
                                        row.status === "Excellent"
                                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                                            : row.status === "Strong"
                                              ? "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300"
                                              : "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
                                    }
                                >
                                    {row.status}
                                </Badge>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
