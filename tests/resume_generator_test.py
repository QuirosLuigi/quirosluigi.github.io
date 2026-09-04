import sys
from pathlib import Path
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "tools"))
import build_resume


class ResumeGeneratorTests(unittest.TestCase):
    def test_paragraph_forwards_reportlab_options(self):
        style = build_resume.getSampleStyleSheet()["BodyText"]
        flowable = build_resume.paragraph("A bullet", style, bulletText="-")
        self.assertEqual(flowable.bulletText, "-")


if __name__ == "__main__":
    unittest.main()
