# HRIS Industri Pertambangan --- Product & Development Specification

## 1. Tujuan Aplikasi

Membangun aplikasi **Human Resources Information System (HRIS)** yang
dirancang untuk operasional perusahaan pertambangan, terutama lingkungan
kerja dengan:

-   Sistem roster/shift.
-   Area kerja/jobsite yang tersebar.
-   Karyawan kantor, site, camp, dan kontraktor.
-   Absensi berbasis lokasi.
-   Pengelolaan jadwal kerja.
-   Perizinan/cuti.
-   Lembur.
-   Timesheet.
-   KPI/performance.
-   Dokumen dan sertifikasi pekerja.
-   Monitoring masa berlaku dokumen.
-   Rekap payroll dan data pendukung payroll.
-   Dashboard HR dan manajemen.
-   Audit trail dan kontrol akses.

> Catatan: aplikasi ini sebaiknya menjadi **HRIS + Workforce Management
> System**, bukan sekadar aplikasi absensi.

------------------------------------------------------------------------

# 2. Target Pengguna

## 2.1 Employee

Fungsi utama:

-   Login.
-   Melihat profil.
-   Melihat jadwal roster.
-   Clock-in / clock-out.
-   Melihat riwayat absensi.
-   Pengajuan cuti/izin.
-   Pengajuan lembur.
-   Timesheet.
-   Melihat KPI.
-   Upload dokumen pribadi.
-   Melihat pengumuman.

## 2.2 Supervisor / Foreman

Fungsi:

-   Melihat anggota tim.
-   Monitoring kehadiran.
-   Approval izin/cuti.
-   Approval lembur.
-   Verifikasi timesheet.
-   Review KPI.
-   Monitoring sertifikasi anggota tim.

## 2.3 HR

Fungsi:

-   Master employee.
-   Recruitment/onboarding.
-   Kontrak kerja.
-   Departemen dan jabatan.
-   Roster dan shift.
-   Attendance.
-   Leave.
-   Overtime.
-   Payroll data.
-   Training.
-   Sertifikasi.
-   KPI.
-   Laporan.

## 2.4 HSE

Fungsi:

-   Monitoring sertifikasi wajib.
-   Fitness/medical document status.
-   Training keselamatan.
-   Induksi.
-   Dokumen kompetensi.
-   Expiry monitoring.

## 2.5 IT

Fungsi:

-   User management.
-   Role & permission.
-   Device management.
-   Audit log.
-   System configuration.
-   Integrasi.
-   Backup dan monitoring.

## 2.6 Management

Dashboard:

-   Total workforce.
-   Headcount per site.
-   Attendance rate.
-   Absenteeism.
-   Overtime.
-   Manpower distribution.
-   Contract expiry.
-   Certification expiry.
-   Training status.
-   KPI summary.

------------------------------------------------------------------------

# 3. Struktur Organisasi

Model organisasi:

``` text
Company
│
├── Site
│   ├── Department
│   │   ├── Division
│   │   │   └── Position
│   │   │       └── Employee
│   │
│   └── Camp
│
└── Contractor
    └── Employee
```

Contoh:

``` text
PT Mining Indonesia
│
├── Site A
│   ├── Mining
│   ├── Processing
│   ├── Maintenance
│   ├── IT
│   ├── HR
│   └── HSE
│
└── Site B
    ├── Mining
    ├── Maintenance
    └── Support
```

------------------------------------------------------------------------

# 4. Modul Utama

## 4.1 Authentication

Fitur:

-   Login.
-   Logout.
-   Forgot password.
-   Reset password.
-   Change password.
-   Multi-role.
-   Session management.
-   Optional 2FA.
-   Device/session monitoring.

### Role

``` text
SUPER_ADMIN
HR_ADMIN
HR_STAFF
HSE
SUPERVISOR
FOREMAN
EMPLOYEE
IT_ADMIN
MANAGEMENT
```

------------------------------------------------------------------------

# 5. Employee Management

Data employee:

### Personal

-   Employee ID.
-   NIK.
-   Nama lengkap.
-   Nama panggilan.
-   Tempat lahir.
-   Tanggal lahir.
-   Jenis kelamin.
-   Alamat.
-   Nomor telepon.
-   Email.
-   Kontak darurat.

### Employment

-   Join date.
-   Employee status.
-   Employment type.
-   Department.
-   Division.
-   Position.
-   Grade.
-   Supervisor.
-   Site.
-   Camp.
-   Roster.
-   Shift.
-   Cost center.

### Status

``` text
ACTIVE
PROBATION
ON_LEAVE
SUSPENDED
RESIGNED
TERMINATED
RETIRED
```

------------------------------------------------------------------------

# 6. Employee Lifecycle

Alur:

``` text
Recruitment
    ↓
Candidate
    ↓
Selection
    ↓
Offer
    ↓
Onboarding
    ↓
Active Employee
    ↓
Transfer / Promotion
    ↓
Resignation / Termination
```

Setiap perubahan status harus memiliki:

-   Tanggal.
-   User yang melakukan perubahan.
-   Alasan.
-   Dokumen pendukung.
-   Audit trail.

------------------------------------------------------------------------

# 7. Recruitment

Fitur:

-   Job vacancy.
-   Job description.
-   Candidate.
-   Application.
-   Screening.
-   Interview.
-   Test.
-   Selection.
-   Offer.
-   Recruitment status.

Status kandidat:

``` text
APPLIED
SCREENING
INTERVIEW
TEST
SELECTED
OFFERED
HIRED
REJECTED
```

------------------------------------------------------------------------

# 8. Onboarding

Checklist:

-   Employee data.
-   Contract.
-   ID card.
-   Bank information.
-   Emergency contact.
-   Medical check.
-   HSE induction.
-   Site induction.
-   Safety training.
-   Equipment training.
-   PPE acknowledgement.
-   IT account.
-   Email account.
-   Access card.

Progress:

``` text
0% ─────────────── 100%
```

------------------------------------------------------------------------

# 9. Roster Management

Ini merupakan modul penting untuk industri pertambangan.

Contoh roster:

``` text
8:2
14:7
4:2
6:1
7:7
28:14
```

Data roster:

-   Roster ID.
-   Nama roster.
-   Work days.
-   Rest days.
-   Shift.
-   Site.
-   Effective date.

Contoh:

``` text
Roster 8:2

Day 1  → Work
Day 2  → Work
Day 3  → Work
Day 4  → Work
Day 5  → Work
Day 6  → Work
Day 7  → Work
Day 8  → Work
Day 9  → OFF
Day 10 → OFF
```

Sistem harus dapat menghasilkan kalender roster otomatis.

------------------------------------------------------------------------

# 10. Shift Management

Master shift:

``` text
SHIFT-DAY
Start : 07:00
End   : 19:00

SHIFT-NIGHT
Start : 19:00
End   : 07:00
```

Data:

-   Shift code.
-   Shift name.
-   Start time.
-   End time.
-   Break.
-   Grace period.
-   Overtime rule.

Sistem harus mendukung shift yang melewati tengah malam.

------------------------------------------------------------------------

# 11. Attendance

## 11.1 Clock In

Metode:

-   GPS.
-   QR Code.
-   NFC/card.
-   Device biometric.
-   Manual verification oleh supervisor.

Untuk mobile/web:

``` text
Employee
   ↓
Login
   ↓
Request GPS
   ↓
Validate Location
   ↓
Check Schedule
   ↓
Clock In
   ↓
Save Attendance
```

## 11.2 GPS Geofencing

Contoh:

``` text
Site Center
Latitude  : -...
Longitude : ...
Radius    : 100 meter
```

Aturan:

``` text
IF employee_location inside geofence
    THEN allow attendance
ELSE
    reject attendance
```

Jangan hanya menyimpan latitude/longitude. Simpan juga:

-   Accuracy.
-   Timestamp.
-   Device.
-   IP.
-   Attendance method.

------------------------------------------------------------------------

# 12. Attendance Rules

Sistem harus mendeteksi:

-   Present.
-   Absent.
-   Late.
-   Early checkout.
-   Missing clock-in.
-   Missing clock-out.
-   Overtime.
-   Rest day work.
-   Holiday work.
-   Off roster.
-   Unscheduled attendance.

Contoh:

``` text
Schedule: 07:00
Grace period: 10 minutes

Clock-in:
07:05 → ON TIME
07:12 → LATE
```

------------------------------------------------------------------------

# 13. Attendance Correction

Employee dapat mengajukan:

``` text
Forgot Clock In
Forgot Clock Out
Wrong Attendance
GPS Problem
Device Problem
```

Workflow:

``` text
Employee
   ↓
Correction Request
   ↓
Supervisor
   ↓
HR
   ↓
Approved
```

Semua perubahan harus tercatat dalam audit log.

------------------------------------------------------------------------

# 14. Leave Management

Jenis:

-   Annual Leave.
-   Sick Leave.
-   Personal Leave.
-   Emergency Leave.
-   Maternity/Paternity Leave.
-   Unpaid Leave.
-   Special Leave.

Workflow:

``` text
Employee
   ↓
Submit Leave
   ↓
Supervisor Approval
   ↓
HR Verification
   ↓
Approved
```

Sistem menghitung saldo cuti otomatis.

------------------------------------------------------------------------

# 15. Overtime

Data:

-   Employee.
-   Date.
-   Start.
-   End.
-   Duration.
-   Reason.
-   Project.
-   Supervisor.
-   Approval status.

Workflow:

``` text
Request
   ↓
Supervisor
   ↓
HR
   ↓
Approved
   ↓
Payroll
```

Sistem harus menyimpan planned overtime dan actual overtime secara
terpisah.

------------------------------------------------------------------------

# 16. Timesheet

Timesheet dapat digunakan untuk:

-   Jam kerja.
-   Project.
-   Cost center.
-   Activity.
-   Equipment.
-   Work area.

Contoh:

``` text
Employee : EMP001
Date     : 2026-09-23
Project  : Mining Operation
Activity : Pit Operation
Hours    : 10
```

------------------------------------------------------------------------

# 17. KPI / Performance Management

Struktur:

``` text
Company KPI
     ↓
Department KPI
     ↓
Position KPI
     ↓
Employee KPI
```

Contoh KPI:

### Network Engineer

``` text
Network Availability       30%
Incident Resolution        25%
Preventive Maintenance     20%
Documentation              10%
Project Completion         15%
```

Perhitungan:

``` text
Final Score =
(KPI1 × Weight1) +
(KPI2 × Weight2) +
(KPI3 × Weight3)
```

Kategori:

``` text
Performance Period
├── Monthly
├── Quarterly
└── Annual
```

------------------------------------------------------------------------

# 18. Training Management

Data training:

-   Training name.
-   Provider.
-   Instructor.
-   Date.
-   Location.
-   Duration.
-   Cost.
-   Participants.
-   Result.
-   Certificate.

Status:

``` text
PLANNED
REGISTERED
IN_PROGRESS
COMPLETED
FAILED
EXPIRED
```

------------------------------------------------------------------------

# 19. Certification Management

Sangat penting untuk industri pertambangan.

Contoh:

-   K3.
-   Operator certification.
-   Electrical certification.
-   Heavy equipment certification.
-   First Aid.
-   Fire Fighting.
-   Working at Height.
-   Confined Space.
-   Technical competency.

Data:

``` text
Certificate
Employee
Certificate Number
Issue Date
Expiry Date
Provider
Attachment
Status
```

Status otomatis:

``` text
VALID
EXPIRING_SOON
EXPIRED
```

Contoh notification:

``` text
Certificate akan expired dalam 30 hari.
Employee : EMP001
Certificate : Operator
Expiry : 2026-10-20
```

------------------------------------------------------------------------

# 20. Document Management

Dokumen:

-   KTP.
-   KK.
-   NPWP.
-   BPJS.
-   Contract.
-   Certificate.
-   Training certificate.
-   Medical document.
-   License.
-   ID card.

Metadata:

``` text
document_id
employee_id
document_type
file_path
issue_date
expiry_date
uploaded_by
uploaded_at
```

Gunakan object storage untuk file besar.

------------------------------------------------------------------------

# 21. Medical / Fitness Management

Simpan status administratif, bukan diagnosis medis.

Contoh:

``` text
Employee
Medical Check Date
Valid Until
Fitness Status
Document
```

Status:

``` text
FIT
FIT_WITH_RESTRICTION
NOT_VALID
EXPIRED
```

Akses data harus dibatasi berdasarkan role.

------------------------------------------------------------------------

# 22. Camp Management

Untuk site dengan camp.

Data:

``` text
Camp
Building
Room
Bed
Employee
Check-in
Check-out
```

Contoh:

``` text
Camp A
├── Building 1
│   ├── Room 101
│   ├── Room 102
│   └── Room 103
│
└── Building 2
```

Dashboard:

-   Occupancy.
-   Available bed.
-   Employee allocation.
-   Camp capacity.

------------------------------------------------------------------------

# 23. Transportation

Opsional tetapi berguna untuk site.

Data:

-   Employee.
-   Bus.
-   Route.
-   Pickup point.
-   Schedule.
-   Boarding.
-   Departure.
-   Arrival.

Dapat diintegrasikan dengan roster.

------------------------------------------------------------------------

# 24. Payroll Support

Jika payroll belum dibuat penuh, HRIS tetap menyediakan payroll input.

Data:

-   Basic salary.
-   Allowance.
-   Overtime.
-   Deduction.
-   Attendance.
-   Leave.
-   Unpaid leave.
-   Bonus.
-   Incentive.

> Payroll calculation sebaiknya dibuat sebagai modul terpisah karena
> aturan perusahaan dan regulasi dapat berbeda.

------------------------------------------------------------------------

# 25. Dashboard

## Management Dashboard

Card:

``` text
Total Employees
Active Employees
Present Today
Absent Today
On Leave
Overtime
Expiring Certificates
Contract Expiring
```

Chart:

-   Headcount by department.
-   Headcount by site.
-   Attendance trend.
-   Overtime trend.
-   Employee turnover.
-   Certification status.

------------------------------------------------------------------------

# 26. HR Dashboard

Monitoring:

``` text
New Employees
Employees Leaving
Leave Requests
Overtime Requests
Attendance Exceptions
Contract Expiry
Certificate Expiry
Training
```

------------------------------------------------------------------------

# 27. Supervisor Dashboard

Monitoring:

``` text
Team Members
Present
Absent
Late
On Leave
Overtime
Pending Approval
Certificate Expiry
```

------------------------------------------------------------------------

# 28. Notification System

Channel:

-   In-app notification.
-   Email.
-   WhatsApp (opsional).
-   Push notification.

Notification:

``` text
Leave approved
Leave rejected
Overtime approved
Certificate expiring
Contract expiring
Training reminder
Attendance anomaly
```

------------------------------------------------------------------------

# 29. Approval Engine

Gunakan workflow yang dapat dikonfigurasi.

Contoh:

``` text
Leave
Employee
  ↓
Supervisor
  ↓
HR
```

``` text
Overtime
Employee
  ↓
Supervisor
  ↓
Manager
  ↓
HR
```

Approval harus memiliki:

-   Approver.
-   Timestamp.
-   Status.
-   Comment.
-   Previous value.
-   New value.

------------------------------------------------------------------------

# 30. Role Based Access Control

Contoh permission:

``` text
employee.view
employee.create
employee.update
employee.delete

attendance.view
attendance.create
attendance.correct
attendance.approve

leave.create
leave.approve

overtime.create
overtime.approve

kpi.view
kpi.manage

certificate.view
certificate.manage

report.view
```

Jangan menggunakan role sebagai satu-satunya security layer. Gunakan
permission.

------------------------------------------------------------------------

# 31. Audit Trail

Setiap tindakan penting dicatat.

Contoh:

``` text
User:
HR001

Action:
UPDATE_EMPLOYEE

Target:
EMP001

Old:
Position = Technician

New:
Position = Senior Technician

Timestamp:
2026-09-23 10:20:30
```

Audit log tidak boleh dapat dihapus oleh user biasa.

------------------------------------------------------------------------

# 32. Database Design

Rekomendasi:

**PostgreSQL**

Core tables:

``` text
users
roles
permissions
role_permissions

employees
employee_profiles
employee_contacts
employee_documents

companies
sites
departments
divisions
positions
cost_centers

rosters
roster_assignments
shifts
shift_assignments

attendance
attendance_corrections
attendance_devices
geofences

leave_types
leave_balances
leave_requests

overtime_requests
timesheets

kpi_periods
kpi_templates
kpi_assignments
kpi_scores

training
training_participants

certificates
certificate_types

contracts
contract_history

camps
camp_rooms
camp_assignments

notifications
approval_requests
approval_steps

audit_logs
system_settings
```

------------------------------------------------------------------------

# 33. Relasi Database Utama

``` text
employees
    │
    ├── attendance
    ├── leave_requests
    ├── overtime_requests
    ├── timesheets
    ├── certificates
    ├── training_participants
    ├── employee_documents
    ├── contracts
    ├── kpi_assignments
    └── camp_assignments

employees
    │
    └── positions
          │
          └── departments
                 │
                 └── sites
```

------------------------------------------------------------------------

# 34. Contoh Tabel Employee

``` sql
CREATE TABLE employees (
    id UUID PRIMARY KEY,
    employee_number VARCHAR(50) UNIQUE NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150),
    phone VARCHAR(30),
    site_id UUID,
    department_id UUID,
    position_id UUID,
    supervisor_id UUID,
    employment_status VARCHAR(30) NOT NULL,
    join_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

------------------------------------------------------------------------

# 35. Contoh Tabel Attendance

``` sql
CREATE TABLE attendance (
    id UUID PRIMARY KEY,
    employee_id UUID NOT NULL,
    attendance_date DATE NOT NULL,
    clock_in TIMESTAMP,
    clock_out TIMESTAMP,

    latitude DECIMAL(10,7),
    longitude DECIMAL(10,7),
    gps_accuracy DECIMAL(10,2),

    method VARCHAR(30),
    status VARCHAR(30),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

------------------------------------------------------------------------

# 36. API Architecture

Gunakan REST API.

Contoh:

``` text
/api/v1/auth/login

/api/v1/employees
/api/v1/employees/:id

/api/v1/attendance
/api/v1/attendance/clock-in
/api/v1/attendance/clock-out

/api/v1/leave
/api/v1/leave/:id/approve

/api/v1/overtime
/api/v1/overtime/:id/approve

/api/v1/rosters
/api/v1/shifts

/api/v1/certificates
/api/v1/training

/api/v1/kpi

/api/v1/reports
```

------------------------------------------------------------------------

# 37. Recommended Tech Stack

## Backend

Rekomendasi:

``` text
Node.js
TypeScript
NestJS
PostgreSQL
Prisma
Redis
JWT
REST API
```

Alternatif:

``` text
Laravel
PHP
PostgreSQL
Redis
```

## Frontend

``` text
React
TypeScript
Vite
Tailwind CSS
React Query
React Hook Form
Zod
```

## Mobile

Tahap awal:

``` text
Responsive Web / PWA
```

Tahap berikutnya:

``` text
React Native
```

------------------------------------------------------------------------

# 38. Infrastructure

Development:

``` text
MacBook
Docker
PostgreSQL
Redis
Node.js
```

Production:

``` text
Cloud / On-premise Server
        │
        ├── Reverse Proxy
        │
        ├── Frontend
        │
        ├── API
        │
        ├── PostgreSQL
        │
        ├── Redis
        │
        └── Object Storage
```

------------------------------------------------------------------------

# 39. Network Architecture untuk Site

Contoh:

``` text
                    INTERNET
                        │
                  Firewall/Router
                        │
                    Core Switch
                        │
          ┌─────────────┼─────────────┐
          │             │             │
        Server        Office         WiFi
          │
      HRIS Server
          │
     PostgreSQL
```

Untuk multi-site:

``` text
SITE A ── VPN/SD-WAN ── HQ
SITE B ── VPN/SD-WAN ── HQ
SITE C ── VPN/SD-WAN ── HQ
```

HRIS tidak sebaiknya mengekspos database langsung ke internet.

------------------------------------------------------------------------

# 40. Security

Minimum:

-   HTTPS.
-   Password hashing.
-   JWT/session security.
-   RBAC.
-   Permission system.
-   Input validation.
-   SQL injection protection.
-   Rate limiting.
-   CSRF protection sesuai arsitektur.
-   Secure file upload.
-   File type validation.
-   Audit logging.
-   Backup.
-   Encryption untuk data sensitif.
-   Secret management.
-   Session timeout.

------------------------------------------------------------------------

# 41. Backup

Database:

``` text
Daily Full Backup
+
Point-in-Time Recovery
```

Dokumen:

``` text
Object Storage
+
Versioning
+
Backup
```

Minimal lakukan:

``` text
Daily backup
Weekly backup verification
Monthly restore test
```

------------------------------------------------------------------------

# 42. Disaster Recovery

Dokumentasikan:

``` text
RPO
RTO
Backup location
Restore procedure
Emergency contact
Database recovery
Application recovery
```

Contoh target awal:

``` text
RPO: 24 hours
RTO: 4 hours
```

Target sebenarnya harus mengikuti kebutuhan operasional perusahaan.

------------------------------------------------------------------------

# 43. Logging & Monitoring

Gunakan:

``` text
Application Logs
Error Logs
Access Logs
Audit Logs
Performance Metrics
```

Monitoring:

``` text
CPU
RAM
Disk
Database
API latency
Error rate
Active users
```

------------------------------------------------------------------------

# 44. Reporting

Report:

### HR

-   Employee master.
-   Headcount.
-   Turnover.
-   New hire.
-   Termination.

### Attendance

-   Daily attendance.
-   Monthly attendance.
-   Late.
-   Absence.
-   Overtime.

### Certification

-   Valid.
-   Expiring.
-   Expired.

### Roster

-   Employee roster.
-   Site manpower.
-   Shift allocation.

### KPI

-   Employee performance.
-   Department performance.
-   KPI completion.

Export:

``` text
Excel
CSV
PDF
```

------------------------------------------------------------------------

# 45. Project Development Roadmap

## Phase 1 --- Foundation

``` text
Authentication
Users
Roles
Permissions
Organization
Employee Master
```

## Phase 2 --- Workforce

``` text
Roster
Shift
Attendance
GPS
Geofence
Attendance Correction
```

## Phase 3 --- HR

``` text
Leave
Overtime
Timesheet
Employee Documents
Contract
```

## Phase 4 --- Mining Workforce

``` text
Certification
Training
Medical/Fitness Status
Camp
Transportation
```

## Phase 5 --- Performance

``` text
KPI
Performance Review
Goals
Evaluation
```

## Phase 6 --- Analytics

``` text
Dashboard
Reports
Export
Analytics
```

## Phase 7 --- Integration

``` text
Payroll
Biometric
WhatsApp
Email
SSO
ERP
Accounting
```

------------------------------------------------------------------------

# 46. MVP

Jangan langsung membuat seluruh modul.

MVP:

``` text
1. Login
2. Role & Permission
3. Employee Management
4. Site/Department/Position
5. Roster
6. Shift
7. GPS Attendance
8. Leave
9. Overtime
10. Dashboard
11. Reports
12. Audit Log
```

Setelah MVP stabil:

``` text
Training
Certification
KPI
Camp
Transportation
Payroll
Integration
```

------------------------------------------------------------------------

# 47. Development Workflow

Gunakan Git.

``` text
main
│
├── develop
│
├── feature/auth
├── feature/employee
├── feature/attendance
├── feature/roster
└── feature/leave
```

Commit:

``` text
feat: add employee module
fix: resolve attendance timezone issue
refactor: improve roster service
docs: update API documentation
```

------------------------------------------------------------------------

# 48. Testing

## Unit Test

Test:

-   Attendance calculation.
-   Roster calculation.
-   Leave balance.
-   Overtime.
-   KPI calculation.

## Integration Test

Test:

``` text
Login
Employee creation
Clock-in
Clock-out
Leave approval
Overtime approval
```

## Security Test

Test:

-   Unauthorized access.
-   Role bypass.
-   IDOR.
-   File upload.
-   SQL injection.
-   Authentication.
-   Session handling.

------------------------------------------------------------------------

# 49. Important Mining-Specific Rules

Aplikasi harus mempertimbangkan:

### 1. Roster

Tidak semua karyawan bekerja Senin--Jumat.

### 2. Site

Employee dapat berpindah site.

### 3. Shift

Shift dapat melewati tengah malam.

### 4. Connectivity

Site tambang dapat memiliki koneksi internet tidak stabil.

### 5. Offline Attendance

Pertimbangkan PWA/offline queue untuk kondisi jaringan terbatas.

Contoh:

``` text
Employee
   ↓
Clock In
   ↓
No Internet
   ↓
Save Local
   ↓
Internet Available
   ↓
Sync Server
```

Harus ada mekanisme anti-duplicate dan validasi timestamp.

### 6. GPS

GPS dapat memiliki error.

Simpan:

``` text
latitude
longitude
accuracy
timestamp
device
```

### 7. Security

Data HR adalah data sensitif.

Gunakan prinsip:

``` text
Least Privilege
```

------------------------------------------------------------------------

# 50. Contoh User Flow Attendance

``` text
Employee Login
      ↓
Open Attendance
      ↓
Get GPS
      ↓
Check Roster
      ↓
Check Shift
      ↓
Check Geofence
      ↓
Check Duplicate
      ↓
Clock In
      ↓
Save Attendance
      ↓
Notification
```

------------------------------------------------------------------------

# 51. Contoh User Flow Leave

``` text
Employee
   ↓
Create Leave Request
   ↓
Select Leave Type
   ↓
Select Date
   ↓
Check Balance
   ↓
Submit
   ↓
Supervisor
   ↓
Approve / Reject
   ↓
HR
   ↓
Finalize
   ↓
Update Leave Balance
```

------------------------------------------------------------------------

# 52. Contoh User Flow Certificate

``` text
HR
 ↓
Create Certificate
 ↓
Assign Employee
 ↓
Upload Certificate
 ↓
Set Expiry Date
 ↓
System Monitoring
 ↓
30 Days Before Expiry
 ↓
Notification
 ↓
HR / Supervisor
```

------------------------------------------------------------------------

# 53. Dashboard Architecture

``` text
Database
    ↓
Backend Service
    ↓
Reporting Service
    ↓
API
    ↓
Dashboard
```

Jangan melakukan query berat langsung dari frontend.

Untuk laporan besar, gunakan:

-   Database view.
-   Materialized view.
-   Reporting tables.
-   Background jobs.

------------------------------------------------------------------------

# 54. Future AI Features

AI sebaiknya menjadi tahap lanjutan.

Contoh:

### HR Assistant

``` text
"Berapa jumlah operator aktif di Site A?"
```

### Workforce Analytics

``` text
Attendance trend
Overtime trend
Turnover trend
```

### Document Intelligence

OCR untuk membaca:

-   Certificate.
-   Contract.
-   ID documents.

### Expiry Prediction

Mendeteksi dokumen yang segera expired.

### Workforce Forecasting

Membantu HR melihat kebutuhan manpower berdasarkan histori.

> AI digunakan sebagai alat bantu analisis, bukan pengambil keputusan
> otomatis terkait status pekerjaan seseorang.

------------------------------------------------------------------------

# 55. Folder Structure --- Backend

Contoh NestJS:

``` text
backend/
├── src/
│   ├── auth/
│   ├── users/
│   ├── employees/
│   ├── organization/
│   ├── sites/
│   ├── departments/
│   ├── positions/
│   ├── roster/
│   ├── shifts/
│   ├── attendance/
│   ├── leave/
│   ├── overtime/
│   ├── timesheet/
│   ├── certificates/
│   ├── training/
│   ├── contracts/
│   ├── kpi/
│   ├── notifications/
│   ├── reports/
│   ├── audit/
│   └── common/
│
├── prisma/
├── test/
└── package.json
```

------------------------------------------------------------------------

# 56. Folder Structure --- Frontend

``` text
frontend/
├── src/
│   ├── app/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   ├── dashboard/
│   │   ├── employees/
│   │   ├── attendance/
│   │   ├── roster/
│   │   ├── leave/
│   │   ├── overtime/
│   │   ├── training/
│   │   ├── certificates/
│   │   └── reports/
│   │
│   ├── services/
│   ├── hooks/
│   ├── schemas/
│   ├── types/
│   └── utils/
│
└── package.json
```

------------------------------------------------------------------------

# 57. Prioritas Belajar Developer

Untuk membangun aplikasi ini, pelajari secara berurutan:

``` text
1. HTML
2. CSS
3. JavaScript
4. TypeScript
5. Git
6. HTTP
7. REST API
8. React
9. Node.js
10. NestJS
11. PostgreSQL
12. SQL
13. Prisma
14. Authentication
15. Authorization/RBAC
16. Docker
17. Linux
18. Networking
19. Testing
20. Deployment
```

Untuk target **Software Architect**, lanjutkan dengan:

``` text
System Design
Database Design
Caching
Message Queue
Microservices
Observability
Security
CI/CD
Cloud
High Availability
Disaster Recovery
```

------------------------------------------------------------------------

# 58. Project Milestone

## Milestone 1

Buat:

``` text
Login
User
Role
Permission
```

## Milestone 2

Buat:

``` text
Company
Site
Department
Position
Employee
```

## Milestone 3

Buat:

``` text
Roster
Shift
Attendance
GPS
```

## Milestone 4

Buat:

``` text
Leave
Overtime
Timesheet
```

## Milestone 5

Buat:

``` text
Certificate
Training
Document
```

## Milestone 6

Buat:

``` text
KPI
Dashboard
Reports
```

## Milestone 7

Buat:

``` text
Docker
CI/CD
Monitoring
Backup
Production Deployment
```

------------------------------------------------------------------------

# 59. Definition of Done

Sebuah modul dianggap selesai apabila:

-   Database migration tersedia.
-   API tersedia.
-   Validation tersedia.
-   Authentication tersedia.
-   Authorization tersedia.
-   Error handling tersedia.
-   Audit log tersedia untuk aksi penting.
-   Unit test tersedia.
-   Integration test tersedia.
-   Dokumentasi API tersedia.
-   UI tersedia.
-   Responsive.
-   Loading state tersedia.
-   Empty state tersedia.
-   Error state tersedia.
-   Security review dilakukan.

------------------------------------------------------------------------

# 60. Prinsip Arsitektur

Gunakan prinsip:

``` text
Secure by Design
Mobile First
API First
Modular Architecture
Least Privilege
Audit Everything Important
Fail Gracefully
Offline Aware
Scalable
Observable
Maintainable
```

Target akhir:

``` text
                  HRIS MINING PLATFORM
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
      PEOPLE            WORKFORCE          COMPLIANCE
        │                  │                  │
    Employee             Roster           Certificate
    Recruitment           Shift             Training
    Contract              Attendance        Medical Status
    Onboarding            Leave             Documents
                           │
                         Overtime
                           │
                         Timesheet
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                       ANALYTICS
                           │
                  Dashboard / Reports
                           │
                       INTEGRATION
                           │
              ERP / Payroll / Biometric
```

------------------------------------------------------------------------

# 61. Catatan Implementasi

Mulai dari **modular monolith**, bukan microservices.

Rekomendasi awal:

``` text
React
    ↓
NestJS
    ↓
PostgreSQL
    ↓
Redis
```

Setelah sistem membesar, modul tertentu dapat dipisahkan menjadi
service.

Prioritas utama bukan jumlah fitur, tetapi:

1.  Data model yang benar.
2.  Security.
3.  Attendance dan roster yang akurat.
4.  Workflow approval.
5.  Audit trail.
6.  Reliability.
7.  Reporting.
8.  Scalability.
