/**
 * Returns Repo API response.
 * @param {string} solrCall - the url to make a request to
 */

import { StringDecoder } from "string_decoder";

export const solrCall = async (queryParam: string) => {
  const solrUrl = `${process.env.SOLR_URL}/select${queryParam}`;

  const queryString = queryParam
    ? "?" + new URLSearchParams(queryParam).toString()
    : "";
  console.log("queryString is:", queryString);

  try {
    console.log("fetching solr");
    const response = await fetch(solrUrl);
    // console.log("response is", response);

    if (response.status === 200) {
      const data = await response.json();
      console.log("data is", data);
      return data;
    } else {
      return response;
    }
  } catch (error) {
    return error;
  }
};

export const getDivisions = async () => {
  // http://10.225.3.209:8983/solr/repoapi/select?facet.field=divisionFullname_mtxt_s&facet=true&fl=uuid&indent=true&q.op=OR&q=*%3A*&rows=1
  const queryString =
    "?facet.field=divisionFullname_mtxt_s&facet=true&fl=uuid&indent=true&q.op=OR&q=*%3A*&rows=1";
  const res = await solrCall(queryString);
  return res;
};
export const getCollectionCountForDivision = async (name: string) => {
  // collection count for one division:
  // http://10.225.3.209:8983/solr/repoapi/select?facet.field=rootCollection_rootCollectionUUID_s&facet=true&fl=uuid&indent=true&q.op=OR&q=divisionShortname_mtxt%3A%22George%20Arents%20Collection%22&rows=1
  /* 
  facet.field=rootCollection_rootCollectionUUID_s
  &
  facet=true
  &
  fl=uuid
  &
  indent=true
  &
  q.op=OR
  &
  q=divisionShortname_mtxt%3A%22George%20Arents%20Collection%22
  &
  rows=1 

  //solr
    "params": {
      "q": "divisionShortname_mtxt:\"George Arents Collection\"",
      "facet.field": "rootCollection_rootCollectionUUID_s",
      "indent": "true",
      "fl": "uuid",
      "q.op": "OR",
      "rows": "1",
      "facet": "true"
    } 
  
  // ?${params.facet}
*/

  const params = {
    q: 'divisionShortname_mtxt:"George Arents Collection"',
    "facet.field": "rootCollection_rootCollectionUUID_s",
    indent: "true",
    fl: "uuid",
    "q.op": "OR",
    rows: "1",
    facet: "true",
  };

  console.log("params", params);
  console.log("params.q", params.q);
  console.log("params[`q`]", params[`q`]);
  console.log("params[`facet.field`] ", params[`facet.field`]);

  const res = await solrCall(
    "?facet.field=rootCollection_rootCollectionUUID_s&facet=true&fl=uuid&indent=true&q.op=OR&q=divisionShortname_mtxt%3A%22George%20Arents%20Collection%22&rows=1"
  );

  return res;
};

export const getCollections = async () => {
  // http://10.225.3.209:8983/solr/repoapi/select?facet.field=rootCollection_rootCollectionUUID_s&facet=true&indent=true&q.op=OR&q=typeOfResource_mtxt%3A%22moving%20image%22&rows=1
  const queryString = `?facet.field=rootCollection_rootCollectionUUID_s&facet=true&indent=true&q.op=OR&q=typeOfResource_mtxt%3A%22moving%20image%22&rows=1`;
  const res = await solrCall(
    "?facet.field=rootCollection_rootCollectionUUID_s&facet=true&indent=true&q.op=OR&q=typeOfResource_mtxt%3A%22moving%20image%22&rows=1"
  );
  return res;
};

export const isCollectionAV = async (uuid: string, title: string) => {
  // http://10.225.3.209:8983/solr/repoapi/select?indent=true&q.op=OR&q=typeOfResource_mtxt%3A%22moving%20image%22%20AND%20rootCollection_rootCollectionUUID_s%3A%22General%20Dance%20Video%20Archive%7C%7Caa18cd70-0d99-0131-bfae-3c075448cc4b%22&rows=1
  const queryString = `?indent=true&q.op=OR&q=typeOfResource_mtxt%3A%22moving%20image%22%20AND%20rootCollection_rootCollectionUUID_s%3A%22General%20Dance%20Video%20Archive%7C%7Caa18cd70-0d99-0131-bfae-3c075448cc4b%22&rows=1`;
  const res = await solrCall(queryString);
  return res;
};

export const getAVCollections = async () => {
  // http://10.225.3.209:8983/solr/repoapi/select?fl=typeOfResource_mtxt&indent=true&q.op=OR&q=typeOfResource_mtxt%3A%22moving%20image%22%20AND%20rootCollection_rootCollectionUUID_s%3A%22General%20Dance%20Video%20Archive%7C%7Caa18cd70-0d99-0131-bfae-3c075448cc4b%22&rows=1
  const queryString =
    "?fl=typeOfResource_mtxt&indent=true&q.op=OR&q=typeOfResource_mtxt%3A%22moving%20image%22%20AND%20rootCollection_rootCollectionUUID_s%3A%22General%20Dance%20Video%20Archive%7C%7Caa18cd70-0d99-0131-bfae-3c075448cc4b%22&rows=1";
  const res = await solrCall(queryString);
  return res;
};

/*

Type of resource list from MMS:
'text'
'cartographic'
'notated music'
'sound recording'
'sound recording-musical'
'sound recording-nonmusical'
'still image'
'moving image'
'three dimensional object'
'software, multimedia'


AV solr queries:
// queryString is: ?%2Fselect%3Findent=true&q.op=OR&q=*%3A*
http://10.225.3.209:8983/solr/repoapi/select?facet.field=rootCollection_rootCollectionUUID_s&facet=true&indent=true&q.op=OR&q=typeOfResource_mtxt%3A%22moving%20image%22&rows=1

http://10.225.3.209:8983/solr/repoapi/select?indent=true&q.op=OR&q=typeOfResource_mtxt%3A%22moving%20image%22%20AND%20rootCollection_rootCollectionUUID_s%3A%22General%20Dance%20Video%20Archive%7C%7Caa18cd70-0d99-0131-bfae-3c075448cc4b%22&rows=1 

http://10.225.3.209:8983/solr/repoapi/select?fl=typeOfResource_mtxt&indent=true&q.op=OR&q=typeOfResource_mtxt%3A%22moving%20image%22%20AND%20rootCollection_rootCollectionUUID_s%3A%22General%20Dance%20Video%20Archive%7C%7Caa18cd70-0d99-0131-bfae-3c075448cc4b%22&rows=1 

on site:
solr query: use_r_txt of whatever for a collection uuid
*/
