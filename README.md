# datakraft.github.io

# Data→Insights Copilot

Upload a CSV → see trends, simple charts, and AI-generated business actions.

## Why
Leaders want quick, trustworthy takeaways from messy data without hiring an analyst.

## What it does
- CSV upload (≤ 5MB)
- KPIs: rows, columns, missing values, date range
- Charts: time series + top categories
- Optional AI: 3–5 findings + prioritized actions (Exec/Ops/Marketing tone)

## How it works
- Streamlit UI
- pandas + matplotlib for analysis/plots
- OpenAI (optional) for insight generation

## Run locally
```bash
pip install -r requirements.txt
streamlit run app.py
