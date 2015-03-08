# Data Model
## Tables
1. Crawls
2. Links

### 1. Crawls
|CrawlID|Root|Status|Start|End|
|---|---|---|---|---|
|x|URL String|In Progress / Complete / Failed|DateTime|DateTime|

### 2. Links
|LinkID|CrawlID|URL|StatusCode|ResponseTime|Type|Timestamp|FoundOn|Duplicate|
|---|---|---|---|---|---|---|---|
|x|x|URL String|xxx|x ms|link / resource / file|DateTime|LinkID|Boolean|
