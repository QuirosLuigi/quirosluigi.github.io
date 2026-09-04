from pathlib import Path
from shutil import copy2

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Arnold-Luigi-Quiros-Resume.pdf"
SITE_COPY = ROOT / "assets" / "Arnold-Luigi-Quiros-Resume.pdf"


def paragraph(text, style, **options):
    return Paragraph(text, style, **options)


def build_resume():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    SITE_COPY.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(OUTPUT), pagesize=A4,
        leftMargin=15 * mm, rightMargin=15 * mm,
        topMargin=12 * mm, bottomMargin=12 * mm,
        title="Arnold Luigi G. Quiros - Resume",
        author="Arnold Luigi G. Quiros",
    )
    styles = getSampleStyleSheet()
    navy = colors.HexColor("#0f2d3d")
    teal = colors.HexColor("#16716a")
    ink = colors.HexColor("#17212b")
    muted = colors.HexColor("#4c5b66")
    body = ParagraphStyle("Body", parent=styles["BodyText"], fontName="Helvetica", fontSize=8.35, leading=10.6, textColor=ink, spaceAfter=3)
    bullet = ParagraphStyle("Bullet", parent=body, leftIndent=9, firstLineIndent=-7, bulletIndent=0, spaceAfter=2.3)
    section = ParagraphStyle("Section", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=9.2, leading=11.5, textColor=teal, spaceBefore=6, spaceAfter=3, allCaps=True, tracking=0.8)
    name = ParagraphStyle("Name", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=20, leading=22, alignment=TA_CENTER, textColor=navy, spaceAfter=2)
    title = ParagraphStyle("TitleLine", parent=body, fontName="Helvetica-Bold", fontSize=9.5, leading=11.5, alignment=TA_CENTER, textColor=teal, spaceAfter=2)
    contact = ParagraphStyle("Contact", parent=body, fontSize=8.1, leading=10, alignment=TA_CENTER, textColor=muted, spaceAfter=5)
    company = ParagraphStyle("Company", parent=body, fontName="Helvetica-Bold", fontSize=9.1, leading=11, textColor=navy, spaceAfter=0)
    role = ParagraphStyle("Role", parent=body, fontName="Helvetica-Oblique", fontSize=8.4, leading=10.5, textColor=muted, spaceAfter=2)

    story = [
        paragraph("ARNOLD LUIGI G. QUIROS", name),
        paragraph("NETSUITE TECHNICAL CONSULTANT | SUITECLOUD | INTEGRATIONS | AI FOUNDATIONS", title),
        paragraph("Paranaque, Philippines  |  +63 977 499 0509  |  arnoldlquiros@gmail.com  |  linkedin.com/in/luigiquiros  |  quirosluigi.github.io", contact),
        HRFlowable(width="100%", thickness=0.7, color=colors.HexColor("#9bb7b4"), spaceAfter=4),
        paragraph("PROFESSIONAL SUMMARY", section),
        paragraph("Oracle NetSuite Support Engineer specializing in SuiteCloud integrations, SuiteScript, SuiteTalk SOAP/REST, SDF, SuiteAnalytics, and performance troubleshooting. Manage approximately 60 North American customer cases per month from investigation through resolution. Combine log-based debugging, root-cause analysis, customer communication, and cross-functional collaboration to turn urgent incidents into durable fixes and reusable runbooks.", body),
        paragraph("TECHNICAL SKILLS", section),
        paragraph("<b>NetSuite / SuiteCloud:</b> SuiteScript 1.0/2.x (User Event, Map/Reduce, Client, Scheduled), SuiteTalk SOAP/REST, RESTlets, SDF, SuiteAnalytics, Saved Searches, Workbooks, Datasets, Connect/ODBC, roles/permissions, APM, SAL", body),
        paragraph("<b>Integrations &amp; Data:</b> REST APIs, webhooks, JSON, XML, SFTP, Celigo integrator.io, Shopify, Bill.com, HubSpot, Power BI/ETL consumption", body),
        paragraph("<b>Languages / Platforms:</b> JavaScript, Python, SQL basics, PowerShell basics, Kotlin, Linux, Docker, OCI; working knowledge of AWS, Azure, and GCP", body),
        paragraph("<b>Delivery:</b> ServiceNow, Jira, Confluence, Git, Agile, incident troubleshooting, root-cause analysis, runbooks, SOPs, and work instructions", body),
        paragraph("PROFESSIONAL EXPERIENCE", section),
        paragraph("Oracle NetSuite | Support Engineer, SuiteCloud and NetSuite Next | Jul 2024 - Present | Philippines", company),
        paragraph("Manage approximately 60 support cases monthly for North American customers, owning most cases end-to-end through email, chat, phone, and Zoom.", bullet, bulletText="-"),
        paragraph("Diagnose SuiteTalk SOAP/REST, RESTlet, SDF, and SuiteScript integration issues across schema mappings, permissions, deployments, and third-party connectors.", bullet, bulletText="-"),
        paragraph("Improve reliability across User Event, Map/Reduce, Client, and Scheduled scripts through safeguards, structured logging, error handling, search optimization, and governance tuning.", bullet, bulletText="-"),
        paragraph("Strengthen integration resilience with idempotency keys, retry/backoff logic, API-limit-aware batch scheduling, Celigo data transformations, and SFTP validation controls.", bullet, bulletText="-"),
        paragraph("Use APM and SAL to isolate SQL versus script execution time; collaborate with product, engineering, vendors, and customers on rapid mitigation, RCA, and durable recommendations.", bullet, bulletText="-"),
        paragraph("Kenvue | Systems and Social Media Support Intern | Sep 2023 - Feb 2024 | Paranaque, Philippines", company),
        paragraph("Supported Global Capability Center system operations, ServiceNow incident resolution, reconciliation, social-account credential support, Active Directory access reviews, and SOP-aligned documentation.", bullet, bulletText="-"),
        paragraph("CERTIFICATIONS", section),
        paragraph("Prompt Like an Engineer - Cisco Networking Academy (Issued Sep 2026; Credential ID faf7c761-31b1-4356-8b23-3f1a66c4ab33)  |  Oracle NetSuite Certified SuiteFoundation (Sep 2025 - Mar 2027)  |  Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate (Aug 2025)  |  Google IT Support Certificate (Jul 2023)", body),
        paragraph("EDUCATION &amp; ADDITIONAL TRAINING", section),
        paragraph("De La Salle University - Bachelor of Science in Information Technology, Sep 2019 - Jan 2024, GPA 3.125/4.0<br/>Oracle Performance, SFTP, Logs, and Cloud Training; Generative AI Fundamentals (Google); Operating System Basics and Networking Basics (Cisco)", body),
    ]
    doc.build(story)
    copy2(OUTPUT, SITE_COPY)


if __name__ == "__main__":
    build_resume()
