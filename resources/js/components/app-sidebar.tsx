import AppLogo from "@/components/app-logo";
import { NavFooter } from "@/components/nav-footer";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { dashboard } from "@/routes";
import type { NavItem } from "@/types";
import { Link } from "@inertiajs/react";
import {
    BookOpen,
    BriefcaseBusiness,
    CalendarCheck2,
    Clock3,
    FolderGit2,
    LayoutGrid,
    ShieldCheck,
    TimerReset,
    TrendingUp,
    UserCheck,
    Users,
} from "lucide-react";

const mainNavItems: NavItem[] = [
    {
        title: "Dashboard",
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: "Attendance",
        href: "/attendance",
        icon: CalendarCheck2,
    },
    {
        title: "Roster",
        href: "/roster",
        icon: Clock3,
    },
    {
        title: "Payroll",
        href: "/payroll",
        icon: BriefcaseBusiness,
    },
    {
        title: "Compliance",
        href: "/compliance",
        icon: ShieldCheck,
    },
    {
        title: "Employees",
        href: "/employees",
        icon: Users,
    },
    {
        title: "Recruitment",
        href: "/recruitment",
        icon: UserCheck,
    },
    {
        title: "Onboarding",
        href: "/onboarding",
        icon: BriefcaseBusiness,
    },
    {
        title: "Leave",
        href: "/leave",
        icon: CalendarCheck2,
    },
    {
        title: "Overtime",
        href: "/overtime",
        icon: TimerReset,
    },
    {
        title: "Performance",
        href: "/performance",
        icon: TrendingUp,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: "Repository",
        href: "https://github.com/laravel/react-starter-kit",
        icon: FolderGit2,
    },
    {
        title: "Documentation",
        href: "https://laravel.com/docs/starter-kits#react",
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
