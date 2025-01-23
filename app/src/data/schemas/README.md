

Other fields:

Sort

| Display Label on DCFL     | DCFL query param |   API Sort  query param     |  Solr field                |    Notes                                                        |
| :---------------- | :---------------- | :---------------------------------------------------------------------------------- | :--------------------- | :--------------------------------------------------------------------------------- |
| Relevance (default)       | - |                |                        |                                          |
| Newest to oldest  | sort=date-desc |  "collection",  "sub-collection", "item"      |   |
| Oldest to newest | sort=date-asc  | |  |       |
| Title A to Z | sort=title-asc  | |  |       |
| Title Z to A | sort=title-desc  | |  |    number,  "null" if there is no image associated with the record |
| Collections first |- | sort=|  |      Sorts collections and sub-collections on top of the results |
| Items first  | -  | sort=|  |    Sorts Items on top of the results |

Pagination 

|   DCFL query param   | API Query Param |  Notes                                                       |
| :---------------- | :---------------- | :---------------------------------------------------------------------------------- | 
| page=      | page= |                                               |
|-  | per_page=   | not implement on DCFL yet|
|-  | num_results=   |     not implemented on DCFL yet  |

Search

|   DCFL query param   | API Query Param | Notes   |            
| :---------------- | :---------------- | :---------------------------------------------------------------------------------- | 
| -      | q= |                                      on the all collections page, the query param is collection_keywords |

Legacy DC query parameters:
|   name   | param |  example  |      notes          | 
| :---------------- | :---------------- | :---------------------------------------------------------------------------------- | :--------------------- | 
| search      |  keywords= |keywords=billy+rose | |
| sort      |  sort= |sort=keyDate_st+desc| |

|   filter   | param |  example  |      notes          | 
| :---------------- | :---------------- | :---------------------------------------------------------------------------------- | :--------------------- | 
| topic      |filters%5Btopic%5D=Musicals  | | |
| name      |   | | |
| collection      |   | | |
| place      |   | | |
| genre      |   | | |
| publisher      |   | | |
| division      |   | | |
| type      |   | | |
| date      |   | | |
