## Merge table aliases, table columns aliases, and columns descriptions, to create a user-friendly TSV file for the DB documentation:
# webpage "http://localhost:1313/chips/docs/database-description/" or "https://iramat.github.io/chips/docs/description/"
# locally in "content\docs\documentation.md"
# -> pg_aliaseses_comments.tsv

import os
import pandas as pd

print(os.getcwd())

table_aliases=pd.read_csv("./static/data/pg_tables_alias.tsv", sep="\t")

table_columns_aliases=pd.read_csv("./static/data/pg_table_columns_alias.tsv", sep="\t")

table_columns_comments=pd.read_csv("./static/data/pg_tables_columns_comments.tsv", sep="\t")
# Merge the dataframes
# merged_df = table_aliases.merge(table_aliases, left_on="table_name", right_on="table_name", how="left")

merged_df = pd.merge(table_columns_comments, table_columns_aliases, left_on=['table_name', 'column_name'], right_on=['table_name', 'column_name'], how="left")

merged_df_all = pd.merge(merged_df, table_aliases, left_on=['table_name'], right_on=['table_name'], how="left")

merged_df_all['table_alias'].fillna(merged_df_all['table_name'], inplace=True)
merged_df_all['column_alias'].fillna(merged_df_all['column_name'], inplace=True)

df = merged_df_all.drop(columns=['table_name', 'column_name', 'description'])
df.rename(columns={'table_alias': 'table', 'column_alias': 'column', 'comment': 'description'}, inplace=True)

df = df[['table', 'column', 'description']]



df.to_csv("C:\\Users\\TH282424\\Rprojects\\chips\\static\\data\\pg_aliaseses_comments.tsv", sep="\t", index=False)
