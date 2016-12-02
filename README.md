# query-all-the-things
One query for all the code snippets - featuring gists and google as default fallback.

# usage
```bash
# login (Persistant. Searches will be filtered by user)
$addUser:user
# search
[words]
```

# Demo
[demo](http://codepen.io/KarlPokus/debug/YGXLjb)

# Why?
What is the real value here? Well, assuming you use google to query code snippets and your own code snippets are online, google is not going to index them unless they're starred on SO; and google is not going to find your code unless you run fancy mile-long queries with magical operators. So you need to run multiple queries at multiple locations. Query-all-the-things runs **one** query and on **your stuff first** and if you're not satisfied *then* uses google as a fallback.

How is this any better than the gists search at github I hear you ask. Well, maybe not - but you get the convenience of only searching once for multiple sources *and* filter search by username by default *and* you get a handy list of results unlike githubs gists UI with huge thumbnails.

# TODOs
- [x] navigate results by arrows
- [x] google with search term
- [ ] chrome extension that displays relevant gists next to google search results
- [ ] chrome extension that triggers by <kbd>TAB</kbd> in omnibox
- [x] login
- [ ] logout
- [x] display user
- [ ] use Etag
- [ ] filter by multiple query strings
- [ ] Maybe use [SO search api](https://api.stackexchange.com/docs/advanced-search)
- [ ] a cli?

# api 2.0
```bash
# full api
searchterms [-f] [-t md] [-n limit] [-u username]
# Include file data in search. Defaults to only search gist description
-f
# Limit file types. Only applicable if -f is set
-t [md, js]
# limit displayed results. Defaults to 30. Use 0 to set no limit.
-n [limit]
# login to filter by user. Persistant. Skip username to logout.
-u [username]
```
# Licence
MIT
