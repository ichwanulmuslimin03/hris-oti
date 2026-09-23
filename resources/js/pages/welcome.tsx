import { Head, Link, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    BadgeCheck,
    Building2,
    CalendarCheck2,
    Clock3,
    ShieldCheck,
    Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { dashboard, login, register } from '@/routes';

export default function Welcome() {
    const { auth } = usePage().props;

    const features = [
        {
            icon: Users,
            title: 'Workforce visibility',
            text: 'Pantau total tenaga kerja, roster, dan lokasi kerja per site.',
        },
        {
            icon: CalendarCheck2,
            title: 'Attendance tracking',
            text: 'Monitoring clock-in, keterlambatan, izin, dan kehadiran di site.',
        },
        {
            icon: ShieldCheck,
            title: 'Compliance & safety',
            text: 'Kelola sertifikat, medical check, training, serta dokumentasi HSE.',
        },
        {
            icon: Clock3,
            title: 'Payroll support',
            text: 'Konsolidasi lembur, absensi, payroll backup, dan rekap operasional.',
        },
    ];

    return (
        <>
            <Head title="Mining HRIS" />
            <div className="min-h-screen bg-slate-950 text-slate-50">
                <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30">
                            <Building2 className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">
                                Mining HRIS
                            </div>
                            <div className="text-lg font-semibold">PT Mining Indonesia</div>
                        </div>
                    </div>

                    <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
                        <a href="#features" className="transition hover:text-white">Fitur</a>
                        <a href="#modules" className="transition hover:text-white">Modul</a>
                        <a href="#security" className="transition hover:text-white">Keamanan</a>
                    </nav>

                    {auth.user ? (
                        <Link href={dashboard()}>
                            <Button className="bg-emerald-500 text-slate-950 hover:bg-emerald-400">
                                Open dashboard
                            </Button>
                        </Link>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link href={login()} className="text-sm text-slate-300 transition hover:text-white">
                                Masuk
                            </Link>
                            <Link href={register()}>
                                <Button className="bg-emerald-500 text-slate-950 hover:bg-emerald-400">
                                    Daftar
                                </Button>
                            </Link>
                        </div>
                    )}
                </header>

                <main className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8">
                    <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                                Workforce management untuk operasi tambang
                            </span>
                            <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                                HRIS yang mendukung operasional site, safety, dan payroll.
                            </h1>
                            <p className="mt-5 max-w-xl text-lg text-slate-300">
                                Kelola karyawan, roster, absensi, izin, lembur, kepatuhan dokumen,
                                dan KPI dari satu platform yang dibuat untuk lingkungan tambang dan
                                site yang tersebar.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <Link href={auth.user ? dashboard() : register()}>
                                    <Button
                                        size="lg"
                                        className="bg-emerald-500 px-6 text-base text-slate-950 hover:bg-emerald-400"
                                    >
                                        {auth.user ? 'Lihat dashboard' : 'Mulai sekarang'}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href={auth.user ? dashboard() : login()}>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-slate-700 bg-slate-900/60 text-white hover:bg-slate-800"
                                    >
                                        {auth.user ? 'Masuk ke panel' : 'Sudah punya akun'}
                                    </Button>
                                </Link>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
                                {['Shift coverage', 'KPI site', 'HSE compliance', 'Payroll support'].map((item) => (
                                    <span
                                        key={item}
                                        className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5"
                                    >
                                        <BadgeCheck className="h-4 w-4 text-emerald-400" />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-emerald-950/30">
                                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                                                Today
                                            </p>
                                            <h2 className="mt-2 text-2xl font-semibold text-white">
                                                Workforce Overview
                                            </h2>
                                        </div>
                                        <div className="rounded-xl bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">
                                            Live
                                        </div>
                                    </div>

                                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                                            <p className="text-sm text-slate-400">Total workforce</p>
                                            <p className="mt-2 text-3xl font-semibold text-white">1,284</p>
                                            <p className="mt-2 text-xs text-emerald-300">
                                                +6.2% vs last month
                                            </p>
                                        </div>
                                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                                            <p className="text-sm text-slate-400">Attendance rate</p>
                                            <p className="mt-2 text-3xl font-semibold text-white">96.4%</p>
                                            <p className="mt-2 text-xs text-emerald-300">
                                                +1.8% coverage
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-5 space-y-4">
                                        {[
                                            ['North Pit', '97.8%'],
                                            ['Processing', '96.9%'],
                                            ['Camp Support', '95.7%'],
                                        ].map(([site, value]) => (
                                            <div key={site}>
                                                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                                                    <span>{site}</span>
                                                    <span>{value}</span>
                                                </div>
                                                <div className="h-2 rounded-full bg-slate-800">
                                                    <div
                                                        className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-500"
                                                        style={{ width: value }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="features" className="mt-24">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">
                                Fitur utama
                            </p>
                            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                                Semua kebutuhan operasional HR di satu tempat
                            </h2>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {features.map(({ icon: Icon, title, text }) => (
                                <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                    <div className="mb-4 inline-flex rounded-xl bg-emerald-500/15 p-3 text-emerald-300 ring-1 ring-emerald-500/20">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="modules" className="mt-24 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
                        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                            {['Attendance', 'Roster', 'Payroll', 'Compliance'].map((item, index) => (
                                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                                    <div className="mb-3 text-xs uppercase tracking-[0.18em] text-slate-400">
                                        0{index + 1}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{item}</h3>
                                    <p className="mt-3 text-sm text-slate-300">
                                        {index === 0 && 'Pantau absensi dan clock-in per site secara real-time.'}
                                        {index === 1 && 'Jadwalkan shift, rotasi, dan coverage pekerja di tiap lokasi.'}
                                        {index === 2 && 'Rekap lembur, data pendukung payroll, dan kompensasi pekerja.'}
                                        {index === 3 && 'Pantau sertifikat, induksi, dan status dokumen penting.'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="security" className="mt-24 grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                            <p className="text-sm text-slate-400">Role access</p>
                            <p className="mt-3 text-2xl font-semibold text-white">Multi-role</p>
                        </div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                            <p className="text-sm text-slate-400">Audit trail</p>
                            <p className="mt-3 text-2xl font-semibold text-white">Activity log</p>
                        </div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                            <p className="text-sm text-slate-400">Security</p>
                            <p className="mt-3 text-2xl font-semibold text-white">2FA ready</p>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
