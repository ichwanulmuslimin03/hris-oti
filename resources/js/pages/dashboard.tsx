import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { dashboard } from "@/routes";
import { Head } from "@inertiajs/react";
import {
    AlertTriangle,
    ArrowUpRight,
    BadgeCheck,
    BriefcaseBusiness,
    Building2,
    CalendarCheck2,
    Clock3,
    ShieldCheck,
    Users,
} from "lucide-react";

const metrics = [
    {
        title: "Total Workforce",
        value: "1,284",
        change: "+6.2%",
        hint: "vs last month",
        icon: Users,
    },
    {
        title: "Attendance Rate",
        value: "96.4%",
        change: "+1.8%",
        hint: "site coverage",
        icon: CalendarCheck2,
    },
    {
        title: "Overtime Hours",
        value: "148.2h",
        change: "+12.4%",
        hint: "this week",
        icon: Clock3,
    },
    {
        title: "Compliance Status",
        value: "91.2%",
        change: "+3.5%",
        hint: "certificates",
        icon: ShieldCheck,
    },
];

const sitePerformance = [
    {
        site: "Site A - North Pit",
        workforce: 420,
        attendance: "97.8%",
        compliance: "94%",
    },
    {
        site: "Site B - Processing",
        workforce: 336,
        attendance: "96.9%",
        compliance: "92%",
    },
    {
        site: "Site C - Camp & Support",
        workforce: 288,
        attendance: "95.7%",
        compliance: "89%",
    },
    {
        site: "Site D - Maintenance",
        workforce: 240,
        attendance: "97.3%",
        compliance: "93%",
    },
];

const complianceItems = [
    { label: "Mandatory training", value: "94%", tone: "bg-emerald-500" },
    { label: "Medical clearance", value: "91%", tone: "bg-amber-500" },
    { label: "License validity", value: "88%", tone: "bg-rose-500" },
];

const alerts = [
    "2 contractors need document renewal this week.",
    "3 supervisors pending overtime approval.",
    "1 site has attendance below target threshold.",
];

const schedule = [
    {
        title: "Night Shift Rotation",
        time: "22:00 - 06:00",
        crew: "Mining Crew 3",
        status: "On track",
    },
    {
        title: "HSE Induction",
        time: "09:00 - 12:00",
        crew: "New Operators",
        status: "Confirmed",
    },
    {
        title: "Payroll Review",
        time: "14:00 - 16:00",
        crew: "HR Admin",
        status: "Pending",
    },
];

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">
                            Mining operations overview
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight">
                            Workforce Overview
                        </h1>
                    </div>
                    <Button className="self-start">Export report</Button>
                </div>

                <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {metrics.map(
                        ({ title, value, change, hint, icon: Icon }) => (
                            <Card
                                key={title}
                                className="border-emerald-200/80 bg-gradient-to-br from-white to-emerald-50/60 dark:from-card dark:to-slate-950/40"
                            >
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">
                                        {title}
                                    </CardTitle>
                                    <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                                        <Icon className="h-4 w-4" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-semibold">
                                        {value}
                                    </div>
                                    <div className="mt-3 flex items-center gap-2 text-sm">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                            {change}
                                        </span>
                                        <span className="text-muted-foreground">
                                            {hint}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ),
                    )}
                </section>

                <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <CardTitle>Site attendance</CardTitle>
                                    <CardDescription>
                                        Daily workforce presence across active
                                        sites
                                    </CardDescription>
                                </div>
                                <Badge className="bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
                                    Live feed
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {sitePerformance.map((item) => (
                                <div key={item.site} className="space-y-2">
                                    <div className="flex items-center justify-between gap-4 text-sm">
                                        <div>
                                            <p className="font-medium text-foreground">
                                                {item.site}
                                            </p>
                                            <p className="text-muted-foreground">
                                                {item.workforce} workforce
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium text-foreground">
                                                {item.attendance}
                                            </p>
                                            <p className="text-muted-foreground">
                                                attendance
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"
                                            style={{
                                                width:
                                                    item.attendance.replace(
                                                        "%",
                                                        "",
                                                    ) + "%",
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Compliance Status</CardTitle>
                            <CardDescription>
                                Mandatory document and certificate expiry
                                tracking
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            {complianceItems.map((item) => (
                                <div key={item.label} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                            {item.label}
                                        </span>
                                        <span className="font-medium text-foreground">
                                            {item.value}
                                        </span>
                                    </div>
                                    <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                                        <div
                                            className={`h-full rounded-full ${item.tone}`}
                                            style={{ width: item.value }}
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
                                <div className="flex items-center gap-2 font-medium">
                                    <AlertTriangle className="h-4 w-4" />
                                    12 document expiries flagged
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <section className="grid gap-6 xl:grid-cols-[1.2fr_1.1fr_1.1fr]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Operations alerts</CardTitle>
                            <CardDescription>
                                Monitoring latest exceptions and actions
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {alerts.map((alert) => (
                                <div
                                    key={alert}
                                    className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/40"
                                >
                                    <BadgeCheck className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                                    <p className="text-sm text-foreground">
                                        {alert}
                                    </p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Roster schedule</CardTitle>
                            <CardDescription>
                                Upcoming operational assignments
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {schedule.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-xl border border-slate-200 p-3 dark:border-slate-800"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <p className="font-medium text-foreground">
                                            {item.title}
                                        </p>
                                        <Badge variant="outline">
                                            {item.status}
                                        </Badge>
                                    </div>
                                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                                        <Building2 className="h-4 w-4" />
                                        {item.crew}
                                    </div>
                                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                                        <BriefcaseBusiness className="h-4 w-4" />
                                        {item.time}
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>HR actions</CardTitle>
                            <CardDescription>
                                Priority tasks for the team
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-900/40">
                                <p className="text-sm text-muted-foreground">
                                    Open requisitions
                                </p>
                                <p className="mt-1 text-2xl font-semibold">
                                    12
                                </p>
                            </div>
                            <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-900/40">
                                <p className="text-sm text-muted-foreground">
                                    Contract renewals
                                </p>
                                <p className="mt-1 text-2xl font-semibold">
                                    28
                                </p>
                            </div>
                            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200">
                                <p className="text-sm">Onboarding completion</p>
                                <p className="mt-1 text-2xl font-semibold">
                                    89%
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: "Dashboard",
            href: dashboard(),
        },
    ],
};
