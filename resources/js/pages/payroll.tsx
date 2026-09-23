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
    Banknote,
    BriefcaseBusiness,
    FileCheck2,
    TrendingUp,
} from "lucide-react";

const payrollData = [
    {
        name: "Nia Rahma",
        department: "Mining",
        amount: "Rp 12.8M",
        status: "Approved",
    },
    {
        name: "Arif Setiawan",
        department: "Maintenance",
        amount: "Rp 9.4M",
        status: "Review",
    },
    {
        name: "Rizky Prakoso",
        department: "HSE",
        amount: "Rp 10.2M",
        status: "Approved",
    },
    {
        name: "Lina Haryani",
        department: "Support",
        amount: "Rp 8.9M",
        status: "Pending",
    },
];

export default function Payroll() {
    return (
        <>
            <Head title="Payroll" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">
                            Finance support
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight">
                            Payroll
                        </h1>
                    </div>
                    <Badge className="w-fit bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                        Cycle: 2026-09
                    </Badge>
                </div>

                <section className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Gross payroll
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">
                                Rp 5.8B
                            </span>
                            <Banknote className="h-5 w-5 text-emerald-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Net payroll
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">
                                Rp 4.9B
                            </span>
                            <TrendingUp className="h-5 w-5 text-sky-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Approved
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">76%</span>
                            <FileCheck2 className="h-5 w-5 text-emerald-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Open review
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">18</span>
                            <BriefcaseBusiness className="h-5 w-5 text-amber-600" />
                        </CardContent>
                    </Card>
                </section>

                <Card>
                    <CardHeader>
                        <CardTitle>Payroll summary</CardTitle>
                        <CardDescription>
                            Employee compensation summary for current cycle
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {payrollData.map((item) => (
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
                                    {item.amount}
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
            </div>
        </>
    );
}
