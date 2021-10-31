# UFOs Sighting

## A. Overview of the Analysis

### This project is to provide an in-depth analysis of UFO sightings for those who are interested in records of UFO. The web page allows users to filter for multiple criteria like date, city, state, country, shape at the same time.

## B. Results
- The page can be filtered by one or multiple criteria.

### B.1 Filter by one criteria
- If users want to filter by date only, they can type the desire date in the Enter Date box, using the format described in the search box. Then press Enter.
- The page will automatically shows the filtered results by date.
- In the demo picture below, the page is filtered by the date 1/13/2010. There are 3 results. 
![alt text](https://github.com/giseledoan/UFOs/blob/main/static/images/Demo-1criteria.png?raw=true)
### B.2 Filter by multiple criteria
- Similarly, users can type multiple criteria in the corresponding boxes to filter the data, then press Enter.
- The page will automatically shows the filtered results by the those criteria. 
- In the demo picture below, the page is filter by State (ca) and Shape (triangle). There are 7 results. 
![alt text](https://github.com/giseledoan/UFOs/blob/main/static/images/Demo-multiplecriteria.png?raw=true) 

## C. Summary
- **Drawback of the page**: Users have to refresh page before each search by clicking UFO Sightings on the top left of the page.
![alt text](https://github.com/giseledoan/UFOs/blob/main/static/images/UFOSightings.png?raw=true)
- **Recommendation 1**: create a refresh button right under the last search box. 

- **Recommendation 2**: since the data.js file contains UFO sightings in the US only, we can remove the criteria of country (Enter Country).