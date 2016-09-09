# query-all-the-things
One query for all the code snippets - featuring gists and google as default fallback.

# Demo
[demo](http://codepen.io/KarlPokus/debug/YGXLjb)

# Why?
What is the real value here? Well, assuming you use google to query code snippets and your own code snippets are online, google is not going to index them unless they're starred on SO; and google is not going to find your code unless you run fancy mile-long queries with magical operators. So you need to run multiple queries at multiple locations. Query-all-the-things runs **one** query and on **your stuff first** and if you're not satisfied *then* uses google as a fallback.

How is this any better than the gists search at github I hear you ask. Well, maybe not - but you get the convenience of only searching once for multiple sources *and* filter search by username by default *and* you get a handy list of results unlike githubs gists UI with huge thumbnails.

# TODOs
- [x] navigate results by arrows
- [x] google with search term
- [ ] this would ideally be a chrome extension that displays relevant gists next to google search results
- [ ] store user in localstorage on first query
- [ ] display user
- [ ] use Etag
- [ ] filter by multiple query strings
- [ ] Maybe use [SO search api](https://api.stackexchange.com/docs/advanced-search)

# Licence
MIT
