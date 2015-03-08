# The crawler that powers bughunt.io

## State Flow
### API
- Crawls are received through the server.js api.
- A single url is provided to the processor

### The Processor
- Controls the flow of getting links, making sure there are links to crawl etc.
- Calls the parser (to check links are ok), the pinger (to get the status code and response time of a link) and the saver (to save the result to the db)
- Once all links have been crawled, the processor  takes the next set of urls to process, or if there are none (as there always is for the first link) calls the crawler with the next available link (at this point we should check if it is from the same domain etc.)

### The Crawler
- Takes a link it is called with and accesses it using selenium (or another browser) to obtain the links on the page
- It executes any JS on the link in a browser and the parses the HTML for links (including resources in the <head> and images/files)
- This array of links is provided back to the processor


## API Spec
```
/crawl/[:id] {POST, GET}
```
```POST /crawl``` requires a json payload in the format:
```javascript
{
  url: String
}
```
and returns an ID of the crawl

```GET /crawl/id``` returns the crawl in JSON format. This will only return if the logged in user owns the crawl
```javascript
{
  start: Time,
  end: Time,
  url: String,
  crawled: [{
    url: String,
    links: [{
      url: String,
      status: StatusCode,
      responseTime: 100ms,
      type: link || resource || file
      ...
    },
    ...
    ]
  },
  ...
  ]
}
```
