# Data audit change log (2026-10-14)

## Removed courses

- **Broadmoor Cheyenne** — Garbled duplicate: its website/phone are Cheyenne Mountain Resort (home of the Country Club of Colorado, already listed) while its architect/year (Donald Ross, 1918) belong to the Broadmoor East. No course by this name exists. Source: https://www.cheyennemountain.com/
- **Flagler Golf Club** — No data and no independent source for a second course in Flagler; the Town of Flagler's course is Mossland Memorial Golf Course (already listed). Source: https://flagler.test.colorado.gov/media/591
- **Green Way Golf Course** — Duplicate of Greenway Park Golf Course (same address, website and phone; "18 holes / par 27" is an artifact). Source: http://www.gwphoa.org/
- **Haystack Mountain Golf Course** — Closed in October 2021 after the property was sold. Source: https://www.lhvc.com/story/2021/10/06/news/final-round-an-emotional-goodbye-to-the-golf-course-for-everyone/6512.html
- **Highlands Ranch Golf Club** — Former name of the University of Denver Golf Club at Highlands Ranch (same course, renamed 2012; already listed). Source: https://dugchr.com/
- **Hunters Run Golf Course** — Closed in fall 2017 after nearly 25 years. Source: https://www.durangoherald.com/articles/news/hunters-run-golf-course-closes-after-25-years-2/
- **Kennedy 18-Hole Course** — Duplicate of Kennedy Golf Course, which is listed as its 27-hole combinations plus the par 3. Source: https://www.cityofdenvergolf.com/golf-course/kennedy
- **Kissing Camels at Garden of the Gods Club** — Duplicate facility listing; Kissing Camels is the 27-hole course at Garden of the Gods Resort & Club, listed as its North, South and West nines. Source: https://www.gardenofthegodsresort.com/things-to-do/golf/
- **Park Hill Golf Club** — Closed in 2018; the city acquired the land in 2025 for a park. Source: https://en.wikipedia.org/wiki/Park_Hill_Park
- **Perry Golf and Country Club** — Not in Colorado: website perryiagolf.com and 515 phone are Perry, Iowa; coordinates were mis-geocoded. Source: https://www.perryiagolf.com/home.html
- **Pinon** — Duplicate of the Piñon nine at Pagosa Springs Golf Club (already listed as its three 18-hole combinations); no address, phone or website. Source: https://golfpagosa.com/home/golf-course/

## Field changes

| Course (pre-audit name) | Field | Old | New | Source | Note |
|---|---|---|---|---|---|
| Applewood Golf Course | architect | — | Press Maxwell | https://coursefinder.golf.com/course-profile/12933-applewood-golf-course | GOLF.com Course Finder |
| Applewood Golf Course | phone | 2147483647 | (303) 279-3003 | https://coursefinder.golf.com/course-profile/12933-applewood-golf-course | GOLF.com Course Finder |
| Arrowhead Golf Club | address | — | 10850 Sundown Trail, Littleton, CO 80125 | https://coursefinder.golf.com/course-profile/1605-arrowhead-golf-course | GOLF.com Course Finder |
| Aspen Golf Course | architect | — | Frank Hummel | https://coursefinder.golf.com/course-profile/6023-aspen-golf-course | GOLF.com Course Finder |
| Aspen Golf Course | phone | 3141925352 | (970) 429-1949 | https://coursefinder.golf.com/course-profile/6023-aspen-golf-course | GOLF.com Course Finder |
| Ballyneal Golf Hunt Club | name | Ballyneal Golf Hunt Club | Ballyneal Golf & Hunt Club | https://www.ballyneal.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Ballyneal Golf Hunt Club | architect | — | Tom Doak | https://coursefinder.golf.com/course-profile/1644-ballyneal | GOLF.com Course Finder |
| Ballyneal Golf Hunt Club The Mulligan Course | name | Ballyneal Golf Hunt Club The Mulligan Course | Ballyneal Golf & Hunt Club – The Mulligan | https://www.ballyneal.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Ballyneal Golf Hunt Club The Mulligan Course | holes | 18 | 12 | https://www.doakgolf.com/the-mulligan-course/ | 12-hole par-3 short course |
| Ballyneal Golf Hunt Club The Mulligan Course | architect | — | Tom Doak | https://www.doakgolf.com/the-mulligan-course/ | — |
| Battlement Mesa Golf Club | phone | 16483386315 | (970) 285-7274 | https://coursefinder.golf.com/course-profile/12934-battlement-mesa-golf-course | GOLF.com Course Finder |
| Bear Course At Breckenridge Golf Club | name | Bear Course At Breckenridge Golf Club | Breckenridge Golf Club – Bear Nine | http://www.breckenridgegolfclub.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Bear Course At Breckenridge Golf Club | phone | (999) 999-9999 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data ((999) 999-9999) |
| Bear Creek Golf Club | architect | — | Arnold Palmer | https://coursefinder.golf.com/course-profile/4061-bear-creek-golf-club | GOLF.com Course Finder |
| Beaver Course At Breckenridge Golf Club | name | Beaver Course At Breckenridge Golf Club | Breckenridge Golf Club – Beaver Nine | http://www.breckenridgegolfclub.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Beaver Course At Breckenridge Golf Club | phone | (999) 999-9999 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data ((999) 999-9999) |
| Beaver Creek Golf Club | phone | 1775585435 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (1775585435) |
| Bella Ridge Golf Club | city | Berthoud | Johnstown | https://bellaridgegolf.com/ | City taken from the course street address |
| Bella Rosa Golf Course | architect | — | Peter Bain | https://coursefinder.golf.com/course-profile/12935-bella-rosa-golf-course | GOLF.com Course Finder |
| Black Canyon Golf Course | phone | 6213557520 | (970) 497-8524 | https://coursefinder.golf.com/course-profile/12936-black-canyon-golf-course | GOLF.com Course Finder |
| Blue At Eisenhower Golf Course | name | Blue At Eisenhower Golf Course | Eisenhower Golf Club – Blue Course | https://usafasupport.com/eisenhower-golf/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Blue At Eisenhower Golf Course | phone | 9999999999 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (9999999999) |
| Bookcliff Country Club | architect | — | Henry Hughes | https://coursefinder.golf.com/course-profile/12937-bookcliff-country-club | GOLF.com Course Finder |
| Bookcliff Country Club | phone | 1323804656 | (970) 243-3323 | https://coursefinder.golf.com/course-profile/12937-bookcliff-country-club | GOLF.com Course Finder |
| Boomerang Links | architect | — | William Neff | https://coursefinder.golf.com/course-profile/12938-boomerang-links | GOLF.com Course Finder |
| Boulder Country Club Championship Course | name | Boulder Country Club Championship Course | Boulder Country Club | http://www.bouldercc.org/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Boulder Country Club Championship Course | architect | — | Press Maxwell | https://coursefinder.golf.com/course-profile/12939-boulder-country-club-(championship) | GOLF.com Course Finder |
| Boulder Country Club Par 3 Course | name | Boulder Country Club Par 3 Course | Boulder Country Club – Par 3 Course | http://www.bouldercc.org/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Boulder Country Club Par 3 Course | architect | — | Press Maxwell | https://coursefinder.golf.com/course-profile/12940-boulder-country-club-(par-3) | GOLF.com Course Finder |
| Broadlands Golf Course | phone | 2999999999 | (303) 466-8285 | https://coursefinder.golf.com/course-profile/7984-broadlands-golf-course | GOLF.com Course Finder |
| Broken Tee Englewood Golf Course | name | Broken Tee Englewood Golf Course | Broken Tee Golf Course | https://www.englewoodco.gov/brokentee | Official/public facility name; OpenGolfAPI listing name normalized |
| Broken Tee Englewood Golf Course | architect | — | Perry Dye | https://coursefinder.golf.com/course-profile/7986-broken-tee-golf-course | GOLF.com Course Finder |
| Broken Tee Englewood Golf Course | phone | (999) 999-9999 | (303) 762-2300 | https://coursefinder.golf.com/course-profile/7986-broken-tee-golf-course | GOLF.com Course Finder |
| Broken Tee Englewood Par 3 Course | name | Broken Tee Englewood Par 3 Course | Broken Tee Golf Course – Par 3 Course | https://www.englewoodco.gov/brokentee | Official/public facility name; OpenGolfAPI listing name normalized |
| Broken Tee Englewood Par 3 Course | architect | — | Perry Dye | https://coursefinder.golf.com/course-profile/7985-broken-tee-golf-course-(par-3) | GOLF.com Course Finder |
| Broken Tee Englewood Par 3 Course | phone | (999) 999-9999 | (303) 762-2300 | https://coursefinder.golf.com/course-profile/7985-broken-tee-golf-course-(par-3) | GOLF.com Course Finder |
| Canyon Meadow At Fox Hollow At Lakewood | name | Canyon Meadow At Fox Hollow At Lakewood | Fox Hollow Golf Course – Canyon/Meadow | https://www.lakewood.org/Community-Resources/Lakewood-Golf/Fox-Hollow-Golf-Course | Official/public facility name; OpenGolfAPI listing name normalized |
| Canyon Meadow At Fox Hollow At Lakewood | phone | 000000-0000 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (000000-0000) |
| Catamount Ranch And Club | name | Catamount Ranch And Club | Catamount Ranch & Club | http://www.catamountranchclub.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Catamount Ranch And Club | architect | — | Tom Weiskopf | https://coursefinder.golf.com/course-profile/1881-catamount-ranch-&-club | GOLF.com Course Finder |
| Cattail Creek Golf Course | architect | — | Dick Phelps | https://coursefinder.golf.com/course-profile/11508-cattail-creek-golf-course | GOLF.com Course Finder |
| Cattail Creek Golf Course | phone | 999-999-9999 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (999-999-9999) |
| Cedaredge Golf Club | architect | — | Byron Coker | https://coursefinder.golf.com/course-profile/12943-cedaredge-golf-course | GOLF.com Course Finder |
| Cedaredge Golf Club | phone | 1503068273 | (970) 856-7781 | https://coursefinder.golf.com/course-profile/12943-cedaredge-golf-course | GOLF.com Course Finder |
| Challenger Golf Club Los Cumbres Course | name | Challenger Golf Club Los Cumbres Course | Challenger Golf Club | https://courses.opengolfapi.org/courses/CO/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Cherry Creek Country Club | year_opened | — | 2002 | https://coursefinder.golf.com/course-profile/4088-cherry-creek-golf-club | GOLF.com Course Finder |
| Cherry Creek Country Club | address | — | 2405 S Yosemite St, Denver, CO 80231 | https://coursefinder.golf.com/course-profile/4088-cherry-creek-golf-club | GOLF.com Course Finder |
| Cherry Creek Country Club | website | — | https://cherrycreekcountryclub.com | https://coursefinder.golf.com/course-profile/4088-cherry-creek-golf-club | GOLF.com Course Finder |
| Chipeta Golf Course | phone | 6666666667 | (970) 245-7177 | https://coursefinder.golf.com/course-profile/12945-chipeta-golf-course | GOLF.com Course Finder |
| City Park Nine Golf Course | phone | 000000-0000 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (000000-0000) |
| Coal Creek Golf Course | architect | — | Kevin Norby | https://coursefinder.golf.com/course-profile/12947-coal-creek-golf-course | GOLF.com Course Finder |
| Collegiate Peaks Golf Course | phone | 9316461993 | (719) 395-8189 | https://coursefinder.golf.com/course-profile/12948-collegiate-peaks-golf-club | GOLF.com Course Finder |
| Collindale Golf Course | architect | — | Frank Hummel | https://coursefinder.golf.com/course-profile/11510-collindale-golf-course | GOLF.com Course Finder |
| Collindale Golf Course | phone | 000000-0000 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (000000-0000) |
| Colorado Golf Club 9 Hole Course | name | Colorado Golf Club 9 Hole Course | Colorado Golf Club – 9-Hole Par 3 Course | http://coloradogolfclub.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Colorado Springs Country Club | architect | — | Harrison, Brauer & Rippel | https://coursefinder.golf.com/course-profile/10939-colorado-springs-country-club | GOLF.com Course Finder |
| Columbine Country Club | architect | — | Henry Hughes | https://coursefinder.golf.com/course-profile/2013-columbine-country-club | GOLF.com Course Finder |
| Columbine Country Club Par 3 Golf Course | name | Columbine Country Club Par 3 Golf Course | Columbine Country Club – Par 3 Course | http://www.columbinecc.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Columbine Country Club Par 3 Golf Course | type | Resort | Private | https://www.columbinecc.com/ | Par 3 course at a private club (source type said Resort) |
| Commonground Golf Course | name | Commonground Golf Course | CommonGround Golf Course | http://www.commongroundgc.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Commonground Golf Course | year_opened | 1972 | 2009 | https://www.doakgolf.com/ | Tom Doak course opened 2009 on the former Lowry AFB course site |
| Commonground Golf Course Junior Par 3 Course | name | Commonground Golf Course Junior Par 3 Course | CommonGround Golf Course – Par 3 Course | http://www.commongroundgc.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Conquistador Golf Course | phone | 2147483647 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (2147483647) |
| Cottonwood Links | phone | 2545352419 | (719) 263-4500 | https://coursefinder.golf.com/course-profile/12949-cottonwood-links | GOLF.com Course Finder |
| Cottonwood Silo At West Woods Golf Club | name | Cottonwood Silo At West Woods Golf Club | West Woods Golf Club – Cottonwood/Silo | http://www.westwoodsgolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Cottonwood Silo At West Woods Golf Club | phone | 8000000000 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (8000000000) |
| Country Club At Castle Pines | name | Country Club At Castle Pines | The Country Club at Castle Pines | http://www.ccatcastlepines.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Country Club At Castle Pines | phone | — | (303) 688-7400 | https://coursefinder.golf.com/course-profile/1886-country-club-at-castle-pines | GOLF.com Course Finder |
| Country Club Of The Rockies | name | Country Club Of The Rockies | Country Club of the Rockies | http://www.countrycluboftherockies.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Coyote Creek Golf Course | phone | 2999999999 | (303) 857-6152 | https://coursefinder.golf.com/course-profile/12950-coyote-creek-golf-course | GOLF.com Course Finder |
| Dalton Ranch Golf Club | architect | — | Ken Dye | https://coursefinder.golf.com/course-profile/5605-dalton-ranch-golf-club | GOLF.com Course Finder |
| Deer Creek Golf Club At Meadow Ranch | name | Deer Creek Golf Club At Meadow Ranch | Deer Creek Golf Club at Meadow Ranch | http://www.playdeercreek.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Deer Creek Golf Club At Meadow Ranch | architect | — | Scott Miller | https://www.golfpass.com/travel-advisor/articles/nature-boy-theres-plenty-to-see-at-deer-creek-golf-club-near-denver | — |
| Denver City Park Golf Course | name | Denver City Park Golf Course | City Park Golf Course | http://www.cityofdenvergolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Denver City Park Golf Course | architect | — | Todd Schoeder (2019 rebuild) | https://coursefinder.golf.com/course-profile/1974-city-park-golf-course | GOLF.com Course Finder |
| Denver Country Club | architect | — | James Foulis | https://coursefinder.golf.com/course-profile/2099-denver-country-club | GOLF.com Course Finder |
| Desert At Adobe Creek National Golf Course | name | Desert At Adobe Creek National Golf Course | Adobe Creek National Golf Course – Desert Nine | http://www.adobecreekgolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Desert At Adobe Creek National Golf Course | architect | — | Paul Graebner | https://coloradounderpar.com/venue/adobe-creek-national-golf-course/ | — |
| Desert At Adobe Creek National Golf Course | phone | 6666666667 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (6666666667) |
| Desert Hawk At Pueblo West | name | Desert Hawk At Pueblo West | Desert Hawk Golf Course at Pueblo West | http://deserthawkgolfcourse.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Devils Thumb Golf Club | name | Devils Thumb Golf Club | Devil's Thumb Golf Club | https://www.devilsthumbgolfcourse.net/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Devils Thumb Golf Club | year_opened | 1963 | 2001 | https://coursefinder.golf.com/course-profile/2115-devil-s-thumb | — |
| Devils Thumb Golf Club | phone | 8000000000 | (970) 874-6262 | https://coursefinder.golf.com/course-profile/2115-devil-s-thumb | GOLF.com Course Finder |
| Divide Ranch Club | name | Divide Ranch Club | Divide Ranch & Club | http://www.divideranchandclub.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Divide Ranch Club | architect | — | Brian Coker | https://coursefinder.golf.com/course-profile/12952-divide-ranch-&-club | GOLF.com Course Finder |
| Dos Rios Country Club | architect | — | Press Maxwell | https://coursefinder.golf.com/course-profile/12953-dos-rios-country-club | GOLF.com Course Finder |
| Eagle Ranch Golf Club | phone | 2999999999 | (970) 328-2882 | https://coursefinder.golf.com/course-profile/12954-eagle-ranch-golf-course | GOLF.com Course Finder |
| Eagle Springs Golf Club | architect | — | Tom Weiskopf & Jay Morrish | https://coursefinder.golf.com/course-profile/4106-eagle-springs-golf-club | GOLF.com Course Finder |
| Eagle Springs Golf Club | phone | 1323804656 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (1323804656) |
| Eagle Trace Golf Club | phone | 3141925352 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (3141925352) |
| Eaglevail Golf Club | name | Eaglevail Golf Club | EagleVail Golf Club | http://www.eaglevailgolfclub.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Eaglevail Golf Club | phone | 3333333333 | (970) 790-1200 | https://coursefinder.golf.com/course-profile/6135-eaglevail-golf-course | GOLF.com Course Finder |
| East At Broadmoor Golf Club | name | East At Broadmoor Golf Club | The Broadmoor – East Course | http://www.broadmoor.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| East At Broadmoor Golf Club | phone | 2121435814 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (2121435814) |
| Eaton Country Club | phone | 4066143815 | (970) 454-2106 | https://coursefinder.golf.com/course-profile/12956-eaton-country-club | GOLF.com Course Finder |
| Eighteen Hole At Indian Tree Golf Club | name | Eighteen Hole At Indian Tree Golf Club | Indian Tree Golf Club | http://indiantree.apexprd.org/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Eighteen Hole At Indian Tree Golf Club | architect | — | Dick Phelps | https://coursefinder.golf.com/course-profile/6535-indian-tree-golf-course | GOLF.com Course Finder |
| Eighteen Hole At South Suburban Golf Course | name | Eighteen Hole At South Suburban Golf Course | South Suburban Golf Course | https://golf.ssprd.org/South-Suburban-Golf-Course | Official/public facility name; OpenGolfAPI listing name normalized |
| Eighteen Hole At South Suburban Golf Course | architect | — | Dick Phelps | https://coursefinder.golf.com/course-profile/7987-south-suburban-golf-course | GOLF.com Course Finder |
| Eighteen Hole At South Suburban Golf Course | phone | 10415683859 | (303) 770-5500 | https://coursefinder.golf.com/course-profile/7987-south-suburban-golf-course | GOLF.com Course Finder |
| Elk Course At Breckenridge Golf Club | name | Elk Course At Breckenridge Golf Club | Breckenridge Golf Club – Elk Nine | http://www.breckenridgegolfclub.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Elk Course At Breckenridge Golf Club | phone | (999) 999-9999 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data ((999) 999-9999) |
| Elmwood Golf Course | phone | 17474232221 | (719) 553-2489 | https://coursefinder.golf.com/course-profile/12957-elmwood-golf-course | GOLF.com Course Finder |
| Elmwood Golf Course 9 Hole Course | name | Elmwood Golf Course 9 Hole Course | Elmwood Golf Course – 9-Hole Course | http://www.pueblo.us/index.aspx?NID=721 | Official/public facility name; OpenGolfAPI listing name normalized |
| Elmwood Golf Course 9 Hole Course | phone | 17474232221 | (719) 553-2489 | https://coursefinder.golf.com/course-profile/12958-elmwood-golf-course-(9-hole) | GOLF.com Course Finder |
| Emerald Greens Golf Club | architect | — | Henry Hughes | https://coursefinder.golf.com/course-profile/12959-emerald-greens-golf-club | GOLF.com Course Finder |
| Emerald Greens Golf Club | phone | 15289715613 | (303) 366-3133 | https://coursefinder.golf.com/course-profile/12959-emerald-greens-golf-club | GOLF.com Course Finder |
| Estes Park Golf Course | architect | — | Henry Hughes | https://coursefinder.golf.com/course-profile/2199-estes-park-golf-course | GOLF.com Course Finder |
| F H Golf Course | name | F H Golf Course | F&H Golf Course | http://www.golfhylandhills.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| F H Golf Course | city | Westminster | Haxtun | https://fandhgolf.com/ | Course sits between Fleming and Haxtun; Haxtun is its mailing address |
| F H Golf Course | address | 9650 Sheridan Blvd, Westminster, CO 80031, USA | 43355 Co Rd 30, Haxtun, CO 80731 | https://coursefinder.golf.com/course-profile/12960-F-&-H-Golf-Park | — |
| F H Golf Course | website | http://www.golfhylandhills.com/ | https://fandhgolf.com/ | https://fandhgolf.com/ | — |
| F H Golf Course | phone | (303) 428-6526 | (970) 774-6362 | https://fandhgolf.com/ | — |
| F H Golf Course | yardage | — | 3261 | https://fandhgolf.com/ | — |
| F H Golf Course | lat | 39.8702981 | — | https://fandhgolf.com/ | OpenGolfAPI coordinates pointed at Hyland Hills (Westminster) |
| F H Golf Course | lng | -105.0506664 | — | https://fandhgolf.com/ | — |
| F H Golf Course | elevation_ft | 5427 | — | https://fandhgolf.com/ | Elevation was derived from the wrong coordinates |
| F H Golf Course | region | Denver Metro | Eastern Plains | https://fandhgolf.com/ | — |
| First Tee Par 3 At Green Valley Ranch Golf Club | name | First Tee Par 3 At Green Valley Ranch Golf Club | Green Valley Ranch Golf Club – First Tee Par 3 | https://www.firstteegreenvalleyranch.org/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Flatirons Golf Course | phone | 9649167736 | (303) 441-3333 | https://coursefinder.golf.com/course-profile/12961-flatirons-golf-course | GOLF.com Course Finder |
| Foothills Golf Course Championship 18 Course | name | Foothills Golf Course Championship 18 Course | Foothills Golf Course | http://www.foothillsgolf.org/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Foothills Golf Course Championship 18 Course | phone | 972 150.7867 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (972 150.7867) |
| Foothills Golf Course Executive Course | name | Foothills Golf Course Executive Course | Foothills Golf Course – Executive Nine | http://www.foothillsgolf.org/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Foothills Golf Course Executive Course | phone | 972 150.7867 | (303) 409-2250 | https://coursefinder.golf.com/course-profile/4931-foothills-golf-course-(executive) | GOLF.com Course Finder |
| Foothills Golf Course Par 3 Course | name | Foothills Golf Course Par 3 Course | Foothills Golf Course – Par 3 Course | http://www.foothillsgolf.org/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Foothills Golf Course Par 3 Course | architect | — | Dick Phelps | https://coursefinder.golf.com/course-profile/4932-foothills-golf-course-(par-3) | GOLF.com Course Finder |
| Foothills Golf Course Par 3 Course | phone | 972 150.7867 | (303) 409-2250 | https://coursefinder.golf.com/course-profile/4932-foothills-golf-course-(par-3) | GOLF.com Course Finder |
| Fort Collins Country Club | phone | 15261485507 | (970) 482-1336 | https://coursefinder.golf.com/course-profile/11511-fort-collins-country-club | GOLF.com Course Finder |
| Fossil Trace Golf Club | phone | 2025072917 | (303) 277-8750 | https://coursefinder.golf.com/course-profile/2252-fossil-trace | GOLF.com Course Finder |
| Four Mile Ranch Golf Club | architect | — | Jim Engh | https://coursefinder.golf.com/course-profile/2255-four-mile-ranch-golf-course | GOLF.com Course Finder |
| Frost Creek | phone | 14891190508 | (970) 328-2326 | https://coursefinder.golf.com/course-profile/2276-frost-creek | GOLF.com Course Finder |
| Garden Of The Gods Club North Course | name | Garden Of The Gods Club North Course | Garden of the Gods Resort & Club – Kissing Camels North | http://www.gardenofthegodsresort.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Garden Of The Gods Club North Course | architect | — | J. Press Maxwell & Mark Rathert | https://www.golfdigest.com/courses/co/garden-of-the-gods-club-north-south-west | — |
| Garden Of The Gods Club North Course | phone | 6666666667 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (6666666667) |
| Garden Of The Gods Club South Course | name | Garden Of The Gods Club South Course | Garden of the Gods Resort & Club – Kissing Camels South | https://www.gardenofthegodsresort.com/membership/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Garden Of The Gods Club South Course | architect | — | J. Press Maxwell & Mark Rathert | https://www.golfdigest.com/courses/co/garden-of-the-gods-club-north-south-west | — |
| Garden Of The Gods Club South Course | phone | 4581707031 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (4581707031) |
| Garden Of The Gods Club West Course | name | Garden Of The Gods Club West Course | Garden of the Gods Resort & Club – Kissing Camels West | https://www.gardenofthegodsresort.com/membership/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Garden Of The Gods Club West Course | architect | Press Maxwell | J. Press Maxwell & Mark Rathert, Lee Schmidt (2008 renovation) | https://www.where2golf.com/usa-colorado/garden-of-the-gods-club-kissing-camels-course/ | — |
| Garden Of The Gods Club West Course | phone | 4581707031 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (4581707031) |
| Glacier Club Mountain Course | name | Glacier Club Mountain Course | The Glacier Club – Mountain Course | https://theglacierclub.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Glacier Club Valley Course | name | Glacier Club Valley Course | The Glacier Club – Valley Course | https://theglacierclub.com/glacier-club-community/clubhouses/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Glacier Club Valley Course | architect | — | Arthur Hills | https://coursefinder.golf.com/course-profile/6293-glacier-club-(valley) | GOLF.com Course Finder |
| Glenmoor Country Club | architect | — | Pete Dye & Perry Dye | https://coursefinder.golf.com/course-profile/2331-glenmoor-country-club | GOLF.com Course Finder |
| Glenmoor Country Club | phone | 5144931442 | (303) 781-3000 | https://coursefinder.golf.com/course-profile/2331-glenmoor-country-club | GOLF.com Course Finder |
| Glenwood Springs Golf Club | phone | 3333333333 | (970) 945-7086 | https://coursefinder.golf.com/course-profile/12963-glenwood-springs-golf-course | GOLF.com Course Finder |
| Golf Club At Fox Acres | architect | — | John Cochran | https://coursefinder.golf.com/course-profile/11512-golf-club-at-fox-acres | GOLF.com Course Finder |
| Golf Club At Fox Acres | phone | 4822984118 | (970) 881-2574 | https://coursefinder.golf.com/course-profile/11512-golf-club-at-fox-acres | GOLF.com Course Finder |
| Golf Club At Heather Ridge | name | Golf Club At Heather Ridge | The Golf Club at Heather Ridge | http://golfclubatheatherridge.net/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Golf Granby Ranch | architect | — | Jack Nicklaus | https://coursefinder.golf.com/course-profile/6603-granby-ranch | GOLF.com Course Finder |
| Golf Granby Ranch | phone | 2545352419 | (970) 887-2709 | https://coursefinder.golf.com/course-profile/6603-granby-ranch | GOLF.com Course Finder |
| Grand Lake Golf Course | architect | — | Dick Phelps | https://coursefinder.golf.com/course-profile/6604-grand-lake-golf-course | GOLF.com Course Finder |
| Grand Lake Golf Course | phone | 7333333333 | (970) 627-8008 | https://coursefinder.golf.com/course-profile/6604-grand-lake-golf-course | GOLF.com Course Finder |
| Greeley Country Club | architect | — | Tom Bendelow | https://coursefinder.golf.com/course-profile/2363-greeley-country-club | GOLF.com Course Finder |
| Greeley Country Club | phone | 2999999999 | (970) 353-0528 | https://coursefinder.golf.com/course-profile/2363-greeley-country-club | GOLF.com Course Finder |
| Green Valley Ranch Golf Club | phone | 3559964215 | (303) 371-3131 | https://coursefinder.golf.com/course-profile/6420-green-valley-ranch | GOLF.com Course Finder |
| Greg Mastriona Golf Courses At Hyland Hills Blue Course | name | Greg Mastriona Golf Courses At Hyland Hills Blue Course | Hyland Hills Golf Course – Blue Course | http://www.golfhylandhills.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Greg Mastriona Golf Courses At Hyland Hills Blue Course | architect | — | Frank Hummel | https://coursefinder.golf.com/course-profile/6309-hyland-hills-(blue) | GOLF.com Course Finder |
| Greg Mastriona Golf Courses At Hyland Hills Gold Course | name | Greg Mastriona Golf Courses At Hyland Hills Gold Course | Hyland Hills Golf Course – Gold Course | http://www.golfhylandhills.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Greg Mastriona Golf Courses At Hyland Hills North Par 3 Course | name | Greg Mastriona Golf Courses At Hyland Hills North Par 3 Course | Hyland Hills Golf Course – North Par 3 | http://www.golfhylandhills.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Greg Mastriona Golf Courses At Hyland Hills South Par 3 Course | name | Greg Mastriona Golf Courses At Hyland Hills South Par 3 Course | Hyland Hills Golf Course – South Par 3 | http://www.golfhylandhills.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Greg Mastriona Golf Courses At Hyland Hills South Par 3 Course | architect | — | Greg Mastriona | https://coursefinder.golf.com/course-profile/4969-hyland-hills-(south-par-3) | GOLF.com Course Finder |
| Harvard Gulch Golf Course | phone | 16820077987 | (720) 865-0450 | https://coursefinder.golf.com/course-profile/7990-harvard-gulch-golf-course | GOLF.com Course Finder |
| Haymaker | name | Haymaker | Haymaker Golf Course | http://www.haymakergolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Haymaker | phone | 0382020290 | (970) 870-1846 | https://coursefinder.golf.com/course-profile/2422-haymaker-golf-course | GOLF.com Course Finder |
| Heather Gardens Golf Course | architect | — | Dick Phelps | https://coursefinder.golf.com/course-profile/7991-heather-gardens-golf-club | GOLF.com Course Finder |
| Heritage Eagle Bend Golf Club | phone | 10982832071 | (303) 400-6700 | https://coursefinder.golf.com/course-profile/7993-heritage-eagle-bend-golf-club | GOLF.com Course Finder |
| Highland Hills Golf Course | architect | — | Frank Hummel | https://coursefinder.golf.com/course-profile/12965-highland-hills-golf-course | GOLF.com Course Finder |
| Highland Meadows Golf Course | architect | — | Art Schaupeter | https://coursefinder.golf.com/course-profile/6467-highland-meadows | GOLF.com Course Finder |
| Hillcrest Golf Club | architect | — | Frank Hummel | https://read.nxtbook.com/ggrw/cga_monthly/december_2023/featured_club.html | Original 1969 design; Kevin Norby renovation 2014 |
| Hiwan Golf Club | architect | — | J. Press Maxwell | https://www.hiwan.com/golf | — |
| Indian Hills Golf Course | phone | 1.4144271570 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (1.4144271570) |
| Interlocken Golf Club Eldorado Sunshine | name | Interlocken Golf Club Eldorado Sunshine | Omni Interlocken Golf Club – Eldorado/Sunshine | https://www.omnihotels.com/hotels/denver-interlocken/golf | Official/public facility name; OpenGolfAPI listing name normalized |
| Interlocken Golf Club Sunshine Vista | name | Interlocken Golf Club Sunshine Vista | Omni Interlocken Golf Club – Sunshine/Vista | https://www.omnihotels.com/hotels/denver-interlocken/golf | Official/public facility name; OpenGolfAPI listing name normalized |
| Interlocken Golf Club Vista Eldorado | name | Interlocken Golf Club Vista Eldorado | Omni Interlocken Golf Club – Vista/Eldorado | https://www.omnihotels.com/hotels/denver-interlocken/golf | Official/public facility name; OpenGolfAPI listing name normalized |
| Inverness Golf Course | name | Inverness Golf Course | The Club at Inverness | https://theclubatinverness.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Inverness Golf Course | address | — | 200 Inverness Dr W, Englewood, CO 80112 | https://coursefinder.golf.com/course-profile/4664-the-club-at-inverness | — |
| Ironbridge Golf Club | city | Cattle Creek | Glenwood Springs | https://coursefinder.golf.com/course-profile/2517-ironbridge-golf-club | City taken from the course street address |
| J F Kennedy Golf Center Babe Lind Creek Course | name | J F Kennedy Golf Center Babe Lind Creek Course | Kennedy Golf Course – Babe Lind/Creek | https://courses.opengolfapi.org/courses/CO/ | Official/public facility name; OpenGolfAPI listing name normalized |
| J F Kennedy Golf Center Par 3 Course | name | J F Kennedy Golf Center Par 3 Course | Kennedy Golf Course – Par 3 Course | http://www.cityofdenvergolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| J F Kennedy Golf Center West Babe Lind Course | name | J F Kennedy Golf Center West Babe Lind Course | Kennedy Golf Course – West/Babe Lind | https://courses.opengolfapi.org/courses/CO/ | Official/public facility name; OpenGolfAPI listing name normalized |
| J F Kennedy Golf Center West Babe Lind Course | architect | — | Henry Hughes | https://coursefinder.golf.com/course-profile/7996-kennedy-golf-center-(west-babe-lind) | GOLF.com Course Finder |
| J F Kennedy Golf Center West Babe Lind Course | website | — | https://www.cityofdenvergolf.com/index.htm | https://coursefinder.golf.com/course-profile/7996-kennedy-golf-center-(west-babe-lind) | GOLF.com Course Finder |
| J F Kennedy Golf Center West Creek Course | name | J F Kennedy Golf Center West Creek Course | Kennedy Golf Course – West/Creek | http://www.cityofdenvergolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Keystone Ranch Golf Course | phone | 1775585444 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (1775585444) |
| Kings Deer Golf Club | name | Kings Deer Golf Club | King's Deer Golf Club | http://www.kingsdeergolfclub.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Kings Deer Golf Club | phone | 5605889194 | (719) 559-4500 | https://coursefinder.golf.com/course-profile/12971-king-s-deer-golf-course | GOLF.com Course Finder |
| Lake Arbor Golf Course | architect | — | Orville Moody | https://coursefinder.golf.com/course-profile/7997-lake-arbor-golf-course | GOLF.com Course Finder |
| Lake Arbor Golf Course | phone | 9999999999 | (720) 898-7360 | https://coursefinder.golf.com/course-profile/7997-lake-arbor-golf-course | GOLF.com Course Finder |
| Lake Estes Executive 9 Hole Course | name | Lake Estes Executive 9 Hole Course | Lake Estes 9-Hole Golf Course | https://evrpd.com/golf/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Lake Estes Executive 9 Hole Course | architect | — | Henry Hughes | https://coursefinder.golf.com/course-profile/11513-lake-estes-golf-course | GOLF.com Course Finder |
| Lake Valley At Pinery Country Club | name | Lake Valley At Pinery Country Club | The Pinery Country Club – Lake/Valley | https://arcisgolf.com/clubs/the_pinery_country_club/home | Official/public facility name; OpenGolfAPI listing name normalized |
| Lake Valley Golf Club | phone | 16442684492 | (303) 444-2114 | https://coursefinder.golf.com/course-profile/12973-lake-valley-golf-club | GOLF.com Course Finder |
| Lakewood Country Club | phone | 4999999999 | (303) 233-4614 | https://coursefinder.golf.com/course-profile/2628-lakewood-country-club | GOLF.com Course Finder |
| Lakota Links Golf Club | phone | 10887826867 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (10887826867) |
| Las Animas Golf Course | architect | — | Ray Hardy | https://coursefinder.golf.com/course-profile/12974-las-animas-golf-club | GOLF.com Course Finder |
| Legacy Ridge Golf Course At Westminster | name | Legacy Ridge Golf Course At Westminster | Legacy Ridge Golf Course | https://www.cityofwestminster.us/ParksRecreation/GolfWestminster/LegacyRidgeGolfCourse | Official/public facility name; OpenGolfAPI listing name normalized |
| Legacy Ridge Golf Course At Westminster | phone | 6213557520 | (303) 658-2601 | https://coursefinder.golf.com/course-profile/7999-legacy-ridge-golf-course | GOLF.com Course Finder |
| Lincoln Park Golf Course | year_opened | — | 1926 | https://coursefinder.golf.com/course-profile/12975-lincoln-park-golf-course | GOLF.com Course Finder |
| Lincoln Park Golf Course | address | — | 1240 Gunnison Ave, Grand Junction, CO 81501 | https://coursefinder.golf.com/course-profile/12975-lincoln-park-golf-course | GOLF.com Course Finder |
| Links Canyon At Fox Hollow At Lakewood | name | Links Canyon At Fox Hollow At Lakewood | Fox Hollow Golf Course – Links/Canyon | https://www.lakewood.org/Community-Resources/Lakewood-Golf/Fox-Hollow-Golf-Course | Official/public facility name; OpenGolfAPI listing name normalized |
| Links Canyon At Fox Hollow At Lakewood | phone | 000000-0000 | (303) 986-7888 | https://coursefinder.golf.com/course-profile/2261-fox-hollow-(links-canyon) | GOLF.com Course Finder |
| Littleton Golf And Tennis Club | name | Littleton Golf And Tennis Club | Littleton Golf & Tennis Club | http://golf.ssprd.org/Littleton-Golf-and-Tennis | Official/public facility name; OpenGolfAPI listing name normalized |
| Littleton Golf And Tennis Club | phone | 10415683859 | (303) 794-5838 | https://coursefinder.golf.com/course-profile/8000-littleton-golf-&-tennis-club | GOLF.com Course Finder |
| Lone Tree Golf Club Hotel | name | Lone Tree Golf Club Hotel | Lone Tree Golf Club & Hotel | https://www.ssprd.org/Lone-Tree-Golf-Club-Hotel | Official/public facility name; OpenGolfAPI listing name normalized |
| Lone Tree Golf Club Hotel | phone | 10415683859 | (303) 799-9940 | https://coursefinder.golf.com/course-profile/5387-lone-tree-golf-course | GOLF.com Course Finder |
| Mad Russian Golf Course | architect | — | Dave Tooley | https://coursefinder.golf.com/course-profile/12976-mad-russian-golf-course | GOLF.com Course Finder |
| Mad Russian Golf Course | year_opened | — | 1979 | https://coursefinder.golf.com/course-profile/12976-mad-russian-golf-course | GOLF.com Course Finder |
| Mad Russian Golf Course | phone | 3257338163 | (970) 587-5157 | https://coursefinder.golf.com/course-profile/12976-mad-russian-golf-course | GOLF.com Course Finder |
| Mariana Butte Golf Course | architect | — | Dick Phelps | https://coursefinder.golf.com/course-profile/11514-mariana-butte-golf-course | GOLF.com Course Finder |
| Mariana Butte Golf Course | phone | 999-999-9999 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (999-999-9999) |
| Maroon Creek Club Golf Course | name | Maroon Creek Club Golf Course | Maroon Creek Club | https://www.mccaspen.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Meadow Golf Course At Pole Creek Golf Club | name | Meadow Golf Course At Pole Creek Golf Club | Pole Creek Golf Club – Meadow Nine | http://www.polecreekgolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Meadow Golf Course At Pole Creek Golf Club | phone | 1.8421052631 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (1.8421052631) |
| Meadow Hills Golf Course | architect | — | Henry Hughes | https://coursefinder.golf.com/course-profile/8001-meadow-hills-golf-course | GOLF.com Course Finder |
| Meadow Links At Fox Hollow At Lakewood | name | Meadow Links At Fox Hollow At Lakewood | Fox Hollow Golf Course – Meadow/Links | https://www.lakewood.org/Community-Resources/Lakewood-Golf/Fox-Hollow-Golf-Course | Official/public facility name; OpenGolfAPI listing name normalized |
| Meadow Links At Fox Hollow At Lakewood | phone | 000000-0000 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (000000-0000) |
| Meadows Golf Club | name | Meadows Golf Club | The Meadows Golf Club | http://www.foothillsgolf.org/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Meadows Golf Club | phone | 972 150.7867 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (972 150.7867) |
| Meadows Pinon At Pagosa Springs Golf Club | name | Meadows Pinon At Pagosa Springs Golf Club | Pagosa Springs Golf Club – Meadows/Piñon | http://www.golfpagosa.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Meeker Golf Course | phone | 6666666667 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (6666666667) |
| Mesa At Adobe Creek National Golf Course | name | Mesa At Adobe Creek National Golf Course | Adobe Creek National Golf Course – Mesa Nine | http://www.adobecreekgolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Mesa At Adobe Creek National Golf Course | architect | — | Ned Wilson | https://coloradounderpar.com/venue/adobe-creek-national-golf-course/ | — |
| Mesa At Adobe Creek National Golf Course | phone | 6666666667 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (6666666667) |
| Monte Vista Country Club | architect | — | Jason Newman | https://coursefinder.golf.com/course-profile/12978-monte-vista-country-club | GOLF.com Course Finder |
| Monument At Adobe Creek National Golf Course | name | Monument At Adobe Creek National Golf Course | Adobe Creek National Golf Course – Monument Nine | http://www.adobecreekgolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Monument At Adobe Creek National Golf Course | architect | — | Ned Wilson | https://coloradounderpar.com/venue/adobe-creek-national-golf-course/ | — |
| Monument At Adobe Creek National Golf Course | phone | 6666666667 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (6666666667) |
| Mossland Memorial Golf Course | phone | — | (719) 765-4659 | https://flagler.test.colorado.gov/media/591 | — |
| Mountain At Cordillera Golf Course | name | Mountain At Cordillera Golf Course | The Club at Cordillera – Mountain Course | http://cordillera-vail.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Mountain At Cordillera Golf Course | phone | 1323804656 | (970) 926-5950 | https://coursefinder.golf.com/course-profile/4562-the-club-at-cordillera-(mountain) | GOLF.com Course Finder |
| Mountain Lake At Pinery Country Club | name | Mountain Lake At Pinery Country Club | The Pinery Country Club – Mountain/Lake | https://arcisgolf.com/clubs/the_pinery_country_club/home | Official/public facility name; OpenGolfAPI listing name normalized |
| Mountain Vista Greens Golf Course | architect | — | Vic Tawara | https://coursefinder.golf.com/course-profile/11515-mountain-vista-greens-golf-course | GOLF.com Course Finder |
| Nine Hole At South Suburban Golf Course | name | Nine Hole At South Suburban Golf Course | South Suburban Golf Course – Par 3 Course | https://golf.ssprd.org/South-Suburban-Golf-Course | Official/public facility name; OpenGolfAPI listing name normalized |
| Nine Hole At South Suburban Golf Course | phone | 10415683859 | (303) 770-5500 | https://coursefinder.golf.com/course-profile/8003-south-suburban-golf-course-(par-3) | GOLF.com Course Finder |
| Olde Course At Loveland | name | Olde Course At Loveland | The Olde Course at Loveland | https://www.golfloveland.com/the-olde-course | Official/public facility name; OpenGolfAPI listing name normalized |
| Olde Course At Loveland | phone | 999-999-9999 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (999-999-9999) |
| Overland Park Golf Course | phone | 17628703778 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (17628703778) |
| Par 3 At Cherokee Ridge Golf Course | name | Par 3 At Cherokee Ridge Golf Course | Cherokee Ridge Golf Course – Par 3 Course | http://www.cherokeeridgegolfcourse.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Par 3 At Cherokee Ridge Golf Course | phone | 1022920115 | (719) 597-2637 | https://coursefinder.golf.com/course-profile/10940-cherokee-ridge-golf-course-(par-3) | GOLF.com Course Finder |
| Par 3 At Indian Tree Golf Club | name | Par 3 At Indian Tree Golf Club | Indian Tree Golf Club – Par 3 Course | http://indiantree.apexprd.org/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Par 3 At Indian Tree Golf Club | architect | — | Dick Phelps | https://coursefinder.golf.com/course-profile/6536-indian-tree-golf-course-(par-3) | GOLF.com Course Finder |
| Patty Jewett Golf Course Peak Nine | name | Patty Jewett Golf Course Peak Nine | Patty Jewett Golf Course – Peak Nine | https://coloradosprings.gov/pattyjewett | Official/public facility name; OpenGolfAPI listing name normalized |
| Patty Jewett Golf Course Plains Nine | name | Patty Jewett Golf Course Plains Nine | Patty Jewett Golf Course – Plains Nine | https://coloradosprings.gov/pattyjewett | Official/public facility name; OpenGolfAPI listing name normalized |
| Patty Jewett Golf Course Prairie Nine | name | Patty Jewett Golf Course Prairie Nine | Patty Jewett Golf Course – Prairie Nine | https://coloradosprings.gov/pattyjewett | Official/public facility name; OpenGolfAPI listing name normalized |
| Pelican Falls At Pelican Lakes Golf Club | name | Pelican Falls At Pelican Lakes Golf Club | Pelican Lakes Golf Club – Falls Course | https://pelicanlakeswindsor.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Pelican Falls At Pelican Lakes Golf Club | phone | 2371572369 | (970) 674-0930 | https://coursefinder.golf.com/course-profile/3037-pelican-lakes-(falls) | GOLF.com Course Finder |
| Pelican Lakes At Pelican Lakes Golf Club | name | Pelican Lakes At Pelican Lakes Golf Club | Pelican Lakes Golf Club – Lakes Course | https://pelicanlakeswindsor.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Pelican Lakes At Pelican Lakes Golf Club | phone | 2371572369 | (970) 674-0930 | https://coursefinder.golf.com/course-profile/6345-pelican-lakes-(lakes) | GOLF.com Course Finder |
| Perry Park Country Club | city | Perry Park | Larkspur | https://www.perryparkcc.com/ | City taken from the course street address |
| Perry Park Country Club | phone | 2999999999 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (2999999999) |
| Pfluger 9 At Pinehurst Country Club | name | Pfluger 9 At Pinehurst Country Club | Pinehurst Country Club – Pfluger Course | https://www.pinehurstcountryclub.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Pfluger 9 At Pinehurst Country Club | architect | — | J. Press Maxwell | https://www.pinehurstcountryclub.com/golf | — |
| Pfluger 9 At Pinehurst Country Club | address | — | 6255 W Quincy Ave, Denver, CO 80235 | https://coursefinder.golf.com/course-profile/5917-pinehurst-country-club-of-denver | Same facility as the Maxwell Course |
| Pine Creek Golf Club | phone | 1021683202 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (1021683202) |
| Pinehurst Country Club | name | Pinehurst Country Club | Pinehurst Country Club – Maxwell Course | http://www.pinehurstcountryclub.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Pinehurst Country Club | address | — | 6255 W Quincy Ave, Denver, CO 80235 | https://coursefinder.golf.com/course-profile/3098-pinehurst-country-club-of-denver | — |
| Pinon Ponderosa At Pagosa Springs Golf Club | name | Pinon Ponderosa At Pagosa Springs Golf Club | Pagosa Springs Golf Club – Piñon/Ponderosa | http://www.golfpagosa.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Plainsman Golf Club | phone | 7626027551 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (7626027551) |
| Plum Creek Golf Country Club | name | Plum Creek Golf Country Club | Plum Creek Golf & Country Club | http://www.golfplumcreek.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Ponderosa Meadows At Pagosa Springs Golf Club | name | Ponderosa Meadows At Pagosa Springs Golf Club | Pagosa Springs Golf Club – Ponderosa/Meadows | http://www.golfpagosa.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Quail Dunes Golf Course | architect | Henry Hughs (front 9), Frank Hummel (back 9) | Henry Hughes (front nine), Frank Hummel (back nine) | https://coursefinder.golf.com/course-profile/6622-quail-dunes-golf-course | Spelling fix (was "Henry Hughs") |
| Quint Valley Golf Club | holes | 18 | 9 | https://coursefinder.golf.com/course-profile/12984-quint-valley-golf-course | GOLF.com Course Finder; source listed 18 holes but tees/yardage are for 9 |
| Quint Valley Golf Club | type | Private | Public | https://coursefinder.golf.com/course-profile/12984-quint-valley-golf-course | GOLF.com Course Finder |
| Raindance National | name | Raindance National | RainDance National Resort & Golf | http://raindancenational.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Raindance National | phone | 7955771020 | (970) 833-1720 | https://coursefinder.golf.com/course-profile/6353-raindance-national | GOLF.com Course Finder |
| Ranch At Roaring Fork Golf Course | name | Ranch At Roaring Fork Golf Course | The Ranch at Roaring Fork Golf Course | http://ranchatroaringforkgolfcourse.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Ranch Golf Course At Pole Creek Golf Club | name | Ranch Golf Course At Pole Creek Golf Club | Pole Creek Golf Club – Ranch Nine | http://www.polecreekgolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Ranch Golf Course At Pole Creek Golf Club | phone | 1.8421052631 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (1.8421052631) |
| Red Hawk Ridge | name | Red Hawk Ridge | Red Hawk Ridge Golf Course | http://www.redhawkridge.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Red Hawk Ridge | architect | — | Jim Engh | https://coursefinder.golf.com/course-profile/4210-red-hawk-ridge-golf-course | GOLF.com Course Finder |
| Red Hawk Ridge | phone | 17801815647 | (720) 733-3500 | https://coursefinder.golf.com/course-profile/4210-red-hawk-ridge-golf-course | GOLF.com Course Finder |
| Red Rocks Country Club | architect | — | Dick Phelps | https://coursefinder.golf.com/course-profile/6528-red-rocks-country-club | GOLF.com Course Finder |
| Red Sky Golf Club Fazio Course | name | Red Sky Golf Club Fazio Course | Red Sky Golf Club – Fazio Course | http://www.redskygolfclub.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Red Sky Golf Club Fazio Course | phone | 1323804656 | (970) 754-8425 | https://coursefinder.golf.com/course-profile/3190-red-sky-ranch-(fazio) | GOLF.com Course Finder |
| Red Sky Golf Club Norman Course | name | Red Sky Golf Club Norman Course | Red Sky Golf Club – Norman Course | http://www.redskygolfclub.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Red Sky Golf Club Norman Course | phone | 1323804656 | (970) 754-8425 | https://coursefinder.golf.com/course-profile/3191-red-sky-ranch-(norman) | GOLF.com Course Finder |
| Regulation Nine At Cherokee Ridge Golf Course | name | Regulation Nine At Cherokee Ridge Golf Course | Cherokee Ridge Golf Course | http://www.cherokeeridgegolfcourse.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Regulation Nine At Cherokee Ridge Golf Course | architect | — | Press Maxwell | https://coursefinder.golf.com/course-profile/10942-cherokee-ridge-golf-course | GOLF.com Course Finder |
| Regulation Nine At Cherokee Ridge Golf Course | phone | 1022920115 | (719) 597-2637 | https://coursefinder.golf.com/course-profile/10942-cherokee-ridge-golf-course | GOLF.com Course Finder |
| Ridge Golf Course At Pole Creek Golf Club | name | Ridge Golf Course At Pole Creek Golf Club | Pole Creek Golf Club – Ridge Nine | http://www.polecreekgolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Ridge Golf Course At Pole Creek Golf Club | phone | 1.8421052631 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (1.8421052631) |
| Rifle Creek Golf Course | phone | 7411220065 | (970) 625-1093 | https://coursefinder.golf.com/course-profile/3217-rifle-creek-golf-course | GOLF.com Course Finder |
| Rio Grande Club | architect | — | Ric Buckton | https://coursefinder.golf.com/course-profile/12985-rio-grande-club | GOLF.com Course Finder |
| River Valley Ranch Golf Club | architect | — | Jay Morrish | https://coursefinder.golf.com/course-profile/6459-river-valley-ranch | GOLF.com Course Finder |
| Riverdale Dunes | name | Riverdale Dunes | Riverdale Golf Club – Dunes Course | http://www.riverdalegolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Riverdale Knolls | name | Riverdale Knolls | Riverdale Golf Club – Knolls Course | http://www.riverdalegolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Roaring Fork Club | architect | — | Jack Nicklaus | https://coursefinder.golf.com/course-profile/3238-roaring-fork-club | GOLF.com Course Finder |
| Roaring Fork Club | phone | 1323804656 | (970) 927-9000 | https://coursefinder.golf.com/course-profile/3238-roaring-fork-club | GOLF.com Course Finder |
| Rocky Ford Golf Course | phone | 2681456482 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (2681456482) |
| Saddle Rock Golf Course | architect | — | Dick Phelps | https://coursefinder.golf.com/course-profile/8005-saddle-rock-golf-course | GOLF.com Course Finder |
| Saddleback Golf Club | architect | — | Andy Johnson | https://coursefinder.golf.com/course-profile/12988-saddleback-golf-course | GOLF.com Course Finder |
| Shining Mountain Golf Club | phone | 16535239084 | (719) 687-7587 | https://coursefinder.golf.com/course-profile/10943-shining-mountain-golf-course | GOLF.com Course Finder |
| Short At Cordillera Golf Course | name | Short At Cordillera Golf Course | The Club at Cordillera – Short Course | https://cordilleraliving.com/amenities-activities/golf/short-course/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Short At Cordillera Golf Course | phone | 16491711286 | (970) 926-5950 | https://coursefinder.golf.com/course-profile/5119-the-club-at-cordillera-(short) | GOLF.com Course Finder |
| Silo Sleeping Indian At West Woods Golf Club | name | Silo Sleeping Indian At West Woods Golf Club | West Woods Golf Club – Silo/Sleeping Indian | http://www.westwoodsgolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Silo Sleeping Indian At West Woods Golf Club | phone | 8000000000 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (8000000000) |
| Silver At Eisenhower Golf Course | name | Silver At Eisenhower Golf Course | Eisenhower Golf Club – Silver Course | https://usafasupport.com/eisenhower-golf/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Silver At Eisenhower Golf Course | architect | — | Frank Hummel | https://coursefinder.golf.com/course-profile/6284-eisenhower-(silver) | GOLF.com Course Finder |
| Silver At Eisenhower Golf Course | phone | 9999999999 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (9999999999) |
| Silver Spruce Golf Course | type | Public | Military | http://www.petersonafbgolf.com/ | Course on Peterson Space Force Base |
| Sky Ranch Golf Course | phone | 2147483647 | (970) 522-2836 | https://coursefinder.golf.com/course-profile/12991-sky-ranch-golf-course | GOLF.com Course Finder |
| Sleeping Indian Cottonwood At West Woods Golf Club | name | Sleeping Indian Cottonwood At West Woods Golf Club | West Woods Golf Club – Sleeping Indian/Cottonwood | http://www.westwoodsgolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Sleeping Indian Cottonwood At West Woods Golf Club | phone | 8000000000 | (720) 898-7370 | https://coursefinder.golf.com/course-profile/8006-west-woods-golf-course-(sleeping-indian-cottonwood) | GOLF.com Course Finder |
| Smoky River Golf Course | architect | — | Marty Johnson, Jr. | https://coursefinder.golf.com/course-profile/12992-smoky-river-golf-course | GOLF.com Course Finder |
| Snowmass Club | phone | 043352-0482 | (970) 923-5600 | https://coursefinder.golf.com/course-profile/12993-snowmass-club | GOLF.com Course Finder |
| Sonnenalp Resort Of Vail | name | Sonnenalp Resort Of Vail | Sonnenalp Golf Club | https://sonnenalp.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Sonnenalp Resort Of Vail | architect | Ben Krueger | Jay Morrish & Bob Cupp | https://sonnenalpclub.com/golf | Opened 1980 as Singletree |
| Sonnenalp Resort Of Vail | city | Vail | Edwards | https://sonnenalpclub.com/golf | — |
| Sonnenalp Resort Of Vail | website | https://sonnenalp.com/ | https://sonnenalpclub.com/golf | https://sonnenalpclub.com/golf | — |
| Sonnenalp Resort Of Vail | phone | 10294991158 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (10294991158) |
| Southglenn Country Club | phone | 1552174025 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (1552174025) |
| Southridge Golf Club | phone | 000000-0000 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (000000-0000) |
| Spreading Antlers Golf Course | phone | 2545352419 | (719) 336-5274 | https://coursefinder.golf.com/course-profile/12995-spreading-antlers-golf-course | GOLF.com Course Finder |
| Spring Valley Golf Course | architect | — | Ross Graves | https://coursefinder.golf.com/course-profile/3439-spring-valley-golf-course | GOLF.com Course Finder |
| Springhill Golf Course | architect | — | Dick Phelps | https://coursefinder.golf.com/course-profile/8008-springhill-golf-course | GOLF.com Course Finder |
| St Andrews At Westcliffe | name | St Andrews At Westcliffe | St. Andrews at Westcliffe | https://courses.opengolfapi.org/courses/CO/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Steamboat Golf Club | phone | 16472706242 | (970) 879-4295 | https://coursefinder.golf.com/course-profile/12996-steamboat-golf-club | GOLF.com Course Finder |
| Stoney Creek Golf Course | architect | — | Tim Root | https://coursefinder.golf.com/course-profile/8009-stoney-creek-golf-course | GOLF.com Course Finder |
| Summit At Cordillera Summit Course | name | Summit At Cordillera Summit Course | The Club at Cordillera – Summit Course | http://www.cordillera-vail.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Summit At Cordillera Summit Course | phone | 1323804656 | (970) 926-5950 | https://coursefinder.golf.com/course-profile/5635-the-club-at-cordillera-(summit) | GOLF.com Course Finder |
| Sumo Golf Village | phone | 2545352419 | (719) 784-4653 | https://coursefinder.golf.com/course-profile/12998-sumo-golf-village | GOLF.com Course Finder |
| Sunset Golf Course | architect | Robert Trent Jones II Group | — | http://www.golflongmont.com/ | Removed unsourced OpenGolfAPI value (Robert Trent Jones II Group, copied from Ute Creek); Sunset dates to 1924 |
| Sunset Golf Course | phone | 8000000000 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (8000000000) |
| Tamarack Golf Course | year_opened | — | 1967 | https://coursefinder.golf.com/course-profile/12999-tamarack-golf-course | GOLF.com Course Finder |
| Tamarack Golf Course | address | — | 50771 CO-71, Limon, CO 80828 | https://coursefinder.golf.com/course-profile/12999-tamarack-golf-course | GOLF.com Course Finder |
| Tamarack Golf Course | website | — | https://townoflimon.com/index.php/golf-home | https://coursefinder.golf.com/course-profile/12999-tamarack-golf-course | GOLF.com Course Finder |
| Tamarack Golf Course | holes | 18 | 9 | https://coursefinder.golf.com/course-profile/12999-tamarack-golf-course | GOLF.com Course Finder; source listed 18 holes but tees/yardage are for 9 |
| The Bridges Golf Country Club | name | The Bridges Golf Country Club | The Bridges Golf & Country Club | https://www.thebridgesgcc.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| The Bridges Golf Country Club | phone | 1363123139 | (970) 252-1119 | https://coursefinder.golf.com/course-profile/13000-the-bridges-golf-&-country-club | GOLF.com Course Finder |
| The Club At Crested Butte | name | The Club At Crested Butte | The Club at Crested Butte | http://www.theclubatcrestedbutte.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| The Club At Crested Butte | architect | — | Robert Trent Jones, Jr. | https://coursefinder.golf.com/course-profile/5952-the-club-at-crested-butte | GOLF.com Course Finder |
| The Club At Crested Butte | phone | (970) 349-8601 / (970) 349-8957 | (970) 349-8601 | https://coursefinder.golf.com/course-profile/5952-the-club-at-crested-butte | GOLF.com Course Finder |
| The Club At Flying Horse | name | The Club At Flying Horse | Flying Horse Resort & Club – Weiskopf Course | https://flyinghorseresort.com/golf | Official/public facility name; OpenGolfAPI listing name normalized |
| The Club At Flying Horse | phone | 3141925352 | (719) 494-1222 | https://coursefinder.golf.com/course-profile/4046-the-club-at-flying-horse | GOLF.com Course Finder |
| The Club At Flying Horse North Course | name | The Club At Flying Horse North Course | Flying Horse Resort & Club – Flying Horse North | https://flyinghorseresort.com/golf/flyinghorsenorth | Official/public facility name; OpenGolfAPI listing name normalized |
| The Club At Flying Horse North Course | phone | 3141925352 | (719) 494-1222 | https://coursefinder.golf.com/course-profile/3555-the-club-at-flying-horse-(north) | GOLF.com Course Finder |
| The Club At Pradera | name | The Club At Pradera | The Club at Pradera | https://arcisgolf.com/clubs/the_club_at_pradera/home | Official/public facility name; OpenGolfAPI listing name normalized |
| The Club At Ravenna | name | The Club At Ravenna | The Club at Ravenna | https://www.ravennagolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| The Club At Ravenna | city | Roxborough Park | Littleton | https://coursefinder.golf.com/course-profile/3560-the-club-at-ravenna | City taken from the course street address |
| The Club At Ravenna | architect | — | Jay Morrish | https://coursefinder.golf.com/course-profile/3560-the-club-at-ravenna | GOLF.com Course Finder |
| The Club at Rolling Hills | year_opened | — | 1968 | https://coursefinder.golf.com/course-profile/5450-the-club-at-rolling-hills | GOLF.com Course Finder |
| The Club at Rolling Hills | address | — | 15707 W 26th Ave, Golden, CO 80401 | https://coursefinder.golf.com/course-profile/5450-the-club-at-rolling-hills | GOLF.com Course Finder |
| The Club at Rolling Hills | website | — | http://www.theclubatrollinghills.org/ | https://coursefinder.golf.com/course-profile/5450-the-club-at-rolling-hills | GOLF.com Course Finder |
| The Country Club At Woodmoor | name | The Country Club At Woodmoor | The Country Club at Woodmoor | http://www.ccwoodmoor.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| The Country Club At Woodmoor | phone | 17985901770 | (719) 481-2272 | https://coursefinder.golf.com/course-profile/10944-country-club-at-woodmoor | GOLF.com Course Finder |
| The Country Club Of Colorado At Cheyenne Mountain Resort | name | The Country Club Of Colorado At Cheyenne Mountain Resort | Country Club of Colorado at Cheyenne Mountain Resort | http://www.cheyennemountaincountryclub.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| The Course At Petteys Park | name | The Course At Petteys Park | The Course at Petteys Park | https://www.petteysparkgolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| The Golf Club At Bear Dance | name | The Golf Club At Bear Dance | The Golf Club at Bear Dance | http://www.beardancegolf.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| The Golf Club At Bear Dance | phone | 1503068273 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (1503068273) |
| The Golf Club At Redlands Mesa | name | The Golf Club At Redlands Mesa | The Golf Club at Redlands Mesa | http://www.redlandsmesa.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| The Homestead Golf Course | architect | — | Denis Griffiths | https://coursefinder.golf.com/course-profile/8010-the-homestead-golf-course | GOLF.com Course Finder |
| The Homestead Golf Course | phone | 000000-0000 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (000000-0000) |
| The Links At Cobble Creek | name | The Links At Cobble Creek | The Links at Cobble Creek | https://www.cobblecreek.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| The Links At Cobble Creek | architect | — | Craig Cherry | https://coloradoavidgolfer.com/golf_course/the-links-at-cobble-creek/ | — |
| The Links At Cobble Creek | phone | 1021683202 | (970) 964-4947 | https://coursefinder.golf.com/course-profile/13002-the-links-at-cobble-creek | GOLF.com Course Finder |
| The Ranch Country Club | architect | — | Dick Phelps | https://coursefinder.golf.com/course-profile/8012-the-ranch-country-club | GOLF.com Course Finder |
| The Raven Golf Club At Three Peaks | name | The Raven Golf Club At Three Peaks | The Raven Golf Club at Three Peaks | http://www.ravenatthreepeaks.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| The Ridge At Castle Pines Colorado | name | The Ridge At Castle Pines Colorado | The Ridge at Castle Pines | http://www.playtheridge.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| The River Course At Keystone | name | The River Course At Keystone | The River Course at Keystone | http://www.golfkeystone.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| The River Course At Keystone | phone | 1775585453 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (1775585453) |
| The Sanctuary | phone | 10006649590 | (303) 224-2860 | https://coursefinder.golf.com/course-profile/3295-sanctuary-golf-club | GOLF.com Course Finder |
| Thorncreek Golf Club | architect | — | Baxter Spann | https://coursefinder.golf.com/course-profile/8013-thorncreek-golf-course | GOLF.com Course Finder |
| Tiara Rado Golf Course | phone | 5054628025 | (970) 254-3830 | https://coursefinder.golf.com/course-profile/13004-tiara-rado-golf-course | GOLF.com Course Finder |
| Tpc Colorado | name | Tpc Colorado | TPC Colorado | https://tpc.com/colorado | Official/public facility name; OpenGolfAPI listing name normalized |
| Tpc Colorado | phone | 2150600628 | (970) 663-5063 | https://coursefinder.golf.com/course-profile/3650-tpc-colorado | GOLF.com Course Finder |
| Twin Peaks Golf Course | architect | Robert Trent Jones II Group | Frank Hummel | https://coursefinder.golf.com/course-profile/6005-twin-peaks-golf-course | OpenGolfAPI value (Robert Trent Jones II Group) matches Ute Creek, a different Longmont course |
| Twin Peaks Golf Course | phone | 8000000000 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (8000000000) |
| University Of Denver Golf Club At Highlands Ranch | name | University Of Denver Golf Club At Highlands Ranch | University of Denver Golf Club at Highlands Ranch | https://dugchr.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| University Of Denver Golf Club At Highlands Ranch | year_opened | 2012 | 1998 | https://coursefinder.golf.com/course-profile/8015-university-of-denver-golf-club-at-highlands-ranch | Opened 1998 as Highlands Ranch Golf Club; renamed 2012 |
| Ute Creek Golf Course | phone | 8000000000 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (8000000000) |
| Vail Golf Club | phone | 1022920115 | (970) 479-2279 | https://coursefinder.golf.com/course-profile/13007-vail-golf-course | GOLF.com Course Finder |
| Valley At Cordillera Golf Course | name | Valley At Cordillera Golf Course | The Club at Cordillera – Valley Course | http://www.cordillera-vail.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| Valley At Cordillera Golf Course | architect | — | Tom Fazio | https://coursefinder.golf.com/course-profile/4012-the-club-at-cordillera-(valley) | GOLF.com Course Finder |
| Valley At Cordillera Golf Course | phone | 1323804656 | (970) 926-5950 | https://coursefinder.golf.com/course-profile/4012-the-club-at-cordillera-(valley) | GOLF.com Course Finder |
| Valley Country Club | architect | — | Billy Bell, Jr. | https://coursefinder.golf.com/course-profile/6520-valley-country-club | GOLF.com Course Finder |
| Valley Hi Municipal Golf Course | name | Valley Hi Municipal Golf Course | Valley Hi Golf Course | https://coloradosprings.gov/golf/page/valley-hi-golf-course | Official/public facility name; OpenGolfAPI listing name normalized |
| Valley Hi Municipal Golf Course | architect | — | Henry Hughes | https://coursefinder.golf.com/course-profile/10945-valley-hi-golf-course | GOLF.com Course Finder |
| Valley Mountain At Pinery Country Club | name | Valley Mountain At Pinery Country Club | The Pinery Country Club – Valley/Mountain | https://arcisgolf.com/clubs/the_pinery_country_club/home | Official/public facility name; OpenGolfAPI listing name normalized |
| Walking Stick Golf Course | architect | — | Arthur Hills | https://coursefinder.golf.com/course-profile/4578-walking-stick-golf-course | GOLF.com Course Finder |
| Walking Stick Golf Course | phone | 2545352419 | (719) 553-1180 | https://coursefinder.golf.com/course-profile/4578-walking-stick-golf-course | GOLF.com Course Finder |
| Walnut Creek Golf Preserve | architect | — | Michael Hurdzan & Dana Fry | https://coursefinder.golf.com/course-profile/6014-walnut-creek-golf-preserve | GOLF.com Course Finder |
| Walnut Creek Golf Preserve | phone | 6213557520 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (6213557520) |
| Walsenburg Golf Course | phone | 1775479466 | (719) 738-2730 | https://coursefinder.golf.com/course-profile/13008-walsenburg-golf-course | GOLF.com Course Finder |
| Wellshire Golf Course | phone | 17628704409 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (17628704409) |
| West At Broadmoor Golf Club | name | West At Broadmoor Golf Club | The Broadmoor – West Course | http://www.broadmoor.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| West At Broadmoor Golf Club | phone | 2121435814 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (2121435814) |
| Willow Creek Golf Club At Eagle Vail | name | Willow Creek Golf Club At Eagle Vail | EagleVail Golf Club – Willow Creek Par 3 | http://eaglevailgolfclub.com/Golf/Willow-Creek-Par-3-Course | Official/public facility name; OpenGolfAPI listing name normalized |
| Willow Creek Golf Club At Eagle Vail | website | http://eaglevailgolfclub.com/Golf/Willow-Creek-Par-3-Course | https://www.eaglevailgolfclub.com/Golf/Willow-Creek-Par-3-Course | https://www.eaglevailgolfclub.com/Golf/Willow-Creek-Par-3-Course | — |
| Willow Creek Golf Club At Eagle Vail | address | 646 Eagle Rd, Avon, CO 81620, USA | 646 Eagle Rd, Avon, CO 81620 | https://www.eaglevailgolfclub.com/Golf/Willow-Creek-Par-3-Course | — |
| Willow Creek Golf Club At Eagle Vail | phone | 3333333333 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (3333333333) |
| World Golf & Sand Creek G.C. | name | World Golf & Sand Creek G.C. | World Golf & Sand Creek Golf Course | http://worldgolfsandcreek.com/ | Official/public facility name; OpenGolfAPI listing name normalized |
| World Golf & Sand Creek G.C. | address | — | 6865 Galley Rd, Colorado Springs, CO 80915 | https://coursefinder.golf.com/course-profile/12990-sand-creek-golf-course | GOLF.com Course Finder |
| Wray Golf Course | phone | 7626029926 | — | https://courses.opengolfapi.org/courses/CO/ | Removed invalid phone from source data (7626029926) |
| Yampa Valley Golf Club | architect | — | William Neff | https://coursefinder.golf.com/course-profile/13012-yampa-valley-golf-course | GOLF.com Course Finder |
