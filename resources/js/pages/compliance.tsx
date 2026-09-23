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
    AlertTriangle,
    FileCheck2,
    ShieldCheck,
    TriangleAlert,
} from "lucide-react";

const complianceRows = [
    {
        item: "Mandatory safety training",
        status: "Valid",
        owner: "HSE Team",
        due: "12 days",
    },
    {
        item: "Medical fitness",
        status: "Review",
        owner: "Clinic",
        due: "4 days",
    },
    {
        item: "Heavy equipment license",
        status: "Expired",
        owner: "Operations",
        due: "Urgent",
    },
    {
        item: "Induction certification",
        status: "Valid",
        owner: "Training",
        due: "28 days",
    },
];

export default function Compliance() {
    return (
        <>
            <Head title="Compliance" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">
                            Safety & certification
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight">
                            Compliance
                        </h1>
                    </div>
                    <Badge className="w-fit bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                        12 alerts pending
                    </Badge>
                </div>

                <section className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Valid documents
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">91%</span>
                            <FileCheck2 className="h-5 w-5 text-emerald-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Needs review
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">24</span>
                            <ShieldCheck className="h-5 w-5 text-sky-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Expired
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">7</span>
                            <TriangleAlert className="h-5 w-5 text-rose-600" />
                        </CardContent>
                    </Card>
                </section>

                <Card>
                    <CardHeader>
                        <CardTitle>Compliance tracker</CardTitle>
                        <CardDescription>
                            Certification and safety document status
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {complianceRows.map((row) => (
                            <div
                                key={row.item}
                                className="flex flex-col gap-3 rounded-xl border border-slate-200 p-3 md:flex-row md:items-center md:justify-between dark:border-slate-800"
                            >
                                <div>
                                    <p className="font-medium text-foreground">
                                        {row.item}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Owner: {row.owner}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-muted-foreground">
                                        Due: {row.due}
                                    </span>
                                    <Badge
                                        className={
                                            row.status === "Valid"
                                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                                                : row.status === "Review"
                                                  ? "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
                                                  : "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300"
                                        }
                                    >
                                        {row.status}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
                    <div className="flex items-center gap-2 font-medium">
                        <AlertTriangle className="h-4 w-4" />
                        Review required for 3 heavy equipment operators before
                        next shift.
                    </div>
                </div>
            </div>
        </>
    );
}
