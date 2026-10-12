from setuptools import setup, find_packages

setup(
    name="srebps-ai",
    version="1.0.0",
    description="SDK Ufficiale Python per l'integrazione di SREBPS AI in bot e siti web",
    long_description=open("README.md", encoding="utf-8").read(),
    long_description_content_type="text/markdown",
    author="SREBPS",
    author_email="c77576250@gmail.com",
    url="https://github.com/c77576250-sudo/srebps-ai",
    project_urls={
        "Homepage": "https://srebps-ai.gt.tc",
        "Documentation": "https://srebps-ai.gt.tc/srebps-ai-libreria/",
        "Repository": "https://github.com/c77576250-sudo/srebps-ai",
    },
    packages=find_packages(),
    python_requires=">=3.8",
    install_requires=[
        "requests>=2.25.0",
    ],
    extras_require={
        "async": ["aiohttp>=3.8.0"],
        "bot": ["discord.py>=2.0.0", "aiohttp>=3.8.0"],
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Topic :: Scientific/Engineering :: Artificial Intelligence",
    ],
)
