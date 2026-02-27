## Merge table aliases, table columns aliases, and columns descriptions, to create a user-friendly TSV file for the DB documentation:
# webpage "http://localhost:1313/chips/docs/database-description/"
# locally in "content\docs\architecture.md"
# -> pg_aliaseses_comments.tsv

import pandas as pd

table_aliases=pd.read_csv("https://raw.githubusercontent.com/iramat/chips/refs/heads/hugo-files/static/data/pg_tables_alias.tsv", sep="\t")

table_columns_aliases=pd.read_csv("https://raw.githubusercontent.com/iramat/chips/refs/heads/hugo-files/static/data/pg_table_columns_alias.tsv", sep="\t")

table_columns_comments=pd.read_csv("https://raw.githubusercontent.com/iramat/chips/refs/heads/hugo-files/static/data/pg_tables_columns_comments.tsv", sep="\t")

# Merge the dataframes
# merged_df = table_aliases.merge(table_aliases, left_on="table_name", right_on="table_name", how="left")

merged_df = pd.merge(table_columns_comments, table_columns_aliases, left_on=['table_name', 'column_name'], right_on=['table_name', 'column_name'], how="left")

merged_df_all = pd.merge(merged_df, table_aliases, left_on=['table_name'], right_on=['table_name'], how="left")

merged_df_all['table_alias'].fillna(merged_df_all['table_name'], inplace=True)
merged_df_all['column_alias'].fillna(merged_df_all['column_name'], inplace=True)

df = merged_df_all.drop(columns=['table_name', 'column_name', 'description'])
df.rename(columns={'table_alias': 'table', 'column_alias': 'column'}, inplace=True)

df = df[['table', 'column', 'comment']]



df.to_csv("C:\\Users\\TH282424\\Rprojects\\chips\\static\\data\\pg_aliaseses_comments.tsv", sep="\t", index=False)
