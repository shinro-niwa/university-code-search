import pandas as pd
import json

df = pd.read_excel(
    "コード検索.xlsx",
    sheet_name="data",
    engine="openpyxl"
)

df.columns = ["code", "name1", "name2", "name3"]

records = (
    df.fillna("")
      .astype(str)
      .to_dict("records")
)

with open(
    "data.json",
    "w",
    encoding="utf-8"
) as f:
    json.dump(
        records,
        f,
        ensure_ascii=False,
        indent=2
    )
