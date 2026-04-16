# Source 

Similar to the data keyword, source is used to plot data from another file. Currently it supports plotting from a normal markdown table. **Future updates will include other sources**.

### Example

Say you have a markdown table like this. 

![](/img/sourceKey.png)

You can use the source keyword to get its information from wherever it is in your vault.

```
source(Income) :: My Finances[0,1] is table from Plugin Showcase
source(Spend) :: My Finances[Month, Spent] is table from Plugin Showcase


obj.scales.x.type = category
obj.plugins.title.text = Using source::

```

![](/img/sourcePlot.png)

The `is table from` syntax is required. In this case `Plugin Showcase` is the file path to that note in the vault. But it could be something like `folder/note name`. 

You need to specify the name of the table in both the codeblock and the source table. Notice how `My Finances` matches in both cases. You can also specify which columns to grab with the `TableName[col1,col2]` syntax. The column names can be the header names (if they exist) or the column numbers *starting at 0*. 