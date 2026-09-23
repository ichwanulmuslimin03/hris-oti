import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Head } from "@inertiajs/react";
import { BriefcaseBusiness, MapPin, Phone, UserCog, Users } from "lucide-react";

const employees = [
    {
        name: "Budi Santoso",
        department: "Mining",
        position: "Operator",
        site: "North Pit",
        status: "Active",
    },
    {
        name: "Rina Fitri",
        department: "HSE",
        position: "Supervisor",
        site: "Site B",
        status: "Probation",
    },
    {
        name: "Hasanudin",
        department: "Maintenance",
        position: "Technician",
        site: "Maintenance Yard",
        status: "Active",
    },
    {
        name: "Maya Putri",
        department: "HR",
        position: "Officer",
        site: "Head Office",
        status: "Active",
    },
];

const lifecycleStages = [
    { label: "Recruitment", value: "126" },
    { label: "Onboarding", value: "48" },
    { label: "Active employees", value: "1,284" },
    { label: "Resignation / termination", value: "17" },
];

export default function Employees() {
    return (
        <>
            <Head title="Employees" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">
                            Human capital
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight">
                            Employees
                        </h1>
                    </div>
                    <Badge className="w-fit bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
                        1,284 active employees
                    </Badge>
                </div>

                <section className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Total headcount
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">
                                1,284
                            </span>
                            <UserCog className="h-5 w-5 text-sky-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                New joiners
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">42</span>
                            <BriefcaseBusiness className="h-5 w-5 text-emerald-600" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-muted-foreground">
                                Contract expiring
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <span className="text-2xl font-semibold">16</span>
                            <Phone className="h-5 w-5 text-amber-600" />
                        </CardContent>
                    </Card>
                </section>

                <Card>
                    <CardHeader>
                        <CardTitle>Lifecycle</CardTitle>
                        <CardDescription>
                            Employee lifecycle pipeline and workforce
                            distribution
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 md:grid-cols-4">
                        {lifecycleStages.map((stage) => (
                            <div
                                key={stage.label}
                                className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50"
                            >
                                <div className="mb-2 flex items-center gap-2 text-slate-500 dark:text-slate-400">
                                    <Users className="h-4 w-4" />
                                    <span className="text-xs uppercase tracking-wide">
                                        {stage.label}
                                    </span>
                                </div>
                                <p className="text-2xl font-semibold text-foreground">
                                    {stage.value}
                                </p>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Team directory</CardTitle>
                        <CardDescription>
                            Employee profiles and deployment
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {employees.map((person) => (
                            <div
                                key={person.name}
                                className="flex flex-col gap-3 rounded-xl border border-slate-200 p-3 md:flex-row md:items-center md:justify-between dark:border-slate-800"
                            >
                                <div>
                                    <p className="font-medium text-foreground">
                                        {person.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {person.position} · {person.department}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <MapPin className="h-4 w-4" />
                                    {person.site}
                                </div>
                                <Badge
                                    className={
                                        person.status === "Active"
                                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                                            : "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
                                    }
                                >
                                    {person.status}
                                </Badge>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
