# query-all-the-things
A chrome extension that lives in the omnibox that searches your gists and has google search as default fallback. For the time being aptly titled `find-ma-gist` in `/src`. A work in progress.

# usage
- install from the chrome web store (when I'm done)
- in the omnibox type <kbd>f</kbd> and <kbd>SPACE</kbd> or <kbd>TAB</kbd> to invoke
- type search query
- navigate results by <kbd>ARROWKEYS</kbd>
- hit <kbd>ENTER</kbd> to select
- reset with <kbd>ESC</kbd>
- `:login [github username]` to filter query by username. Persistant via google store sync.
- `:logout` to remove filter

# why?
What is the real value here? Well, assuming you use google to query code snippets and your own code snippets are online, google is not going to index them unless they're starred on SO; and google is not going to find your code unless you run fancy mile-long queries with magical operators. So you need to run multiple queries at multiple locations. Query-all-the-things runs **one** query and on **your stuff first** and if you're not satisfied *then* uses google as a fallback. How is this any better than the gists search at github I hear you ask. Well, maybe not - but you get the convenience of only searching once for multiple sources *and* filter search by username by default *and* you get a handy list of results unlike githubs gists UI with huge thumbnails.

# TODOs
- [x] login
- [x] logout
- [x] persistant storage
- [x] google with query by default
- [x] debounce `inputChanged`
- [ ] login via popup instead?
- [ ] change login/logout to filter as that's really what we're doing here
- [ ] better filter by regex for multiple query strings
- [ ] display user? Maybe update icon?
- [ ] fetch more gists for not logged in. Defaults to 100 recent ones.
- [ ] add more sources? [so](https://api.stackexchange.com/docs/advanced-search), codepen, jsbin?
- [ ] different UI:s? display results next to google results? a cli?
- [ ] upload to chrome app store
- [ ] use Etag
- [ ] expand search to file name and contents? Maybe just `.md`?

# limitations
Unauthenticated requests are limited to 60 req/h

# Licence
MIT