var batches = [[39,27,262,387,177],[203,55,46,106,239],[267,208,220,305,133],[60,194,129,154,341],[183,22,75,174,170],[356,143,357,87,35],[176,197,92,279,333],[353,73,250,259,167],[329,248,277,282,252],[23,219,189,257,15],[159,127,16,91,2],[155,360,132,113,95],[335,17,264,234,85],[366,61,281,237,160],[204,161,48,367,295],[153,315,294,134,317],[8,368,38,41,381],[301,342,326,293,110],[373,117,306,124,390],[336,11,303,346,184],[26,158,386,286,217],[327,244,52,363,243],[382,276,122,120,283],[115,79,173,185,77],[63,181,383,142,6],[186,380,322,331,205],[280,100,165,253,80],[288,37,162,210,355],[45,53,149,263,337],[147,379,43,102,187],[350,28,180,313,57],[83,258,309,292,298],[125,135,218,84,375],[94,323,12,212,192],[32,229,302,191,324],[98,131,128,195,51],[140,90,136,227,233],[199,238,121,209,42],[82,314,260,232,18],[319,168,108,284,188],[358,109,270,207,193],[245,304,274,40,247],[141,64,157,376,118],[206,65,372,347,7],[68,230,196,325,4],[89,266,97,224,74],[296,20,362,78,30],[222,228,104,251,58],[62,148,200,246,5],[374,152,221,236,34],[318,71,86,340,213],[103,150,226,44,211],[139,116,328,31,291],[385,231,216,384,138],[171,69,345,111,182],[256,93,36,119,29],[359,242,3,312,365],[371,378,201,190,146],[47,105,14,272,311],[255,81,316,76,33],[10,25,49,175,297],[54,9,310,332,123],[202,198,348,66,145],[308,101,320,321,164],[169,151,377,287,254],[300,137,166,349,215],[156,67,50,338,361],[240,21,388,56,130],[265,334,114,278,285],[290,235,144,249,344],[369,289,268,339,72],[13,271,99,214,163],[70,261,354,351,330],[299,112,1,107,172],[96,59,269,223,19],[24,88,275,307,389],[352,241,343,178,179],[364,273,370,225,126]];

var data = [
  {},
 {
   "pre_formatted": "He said, \"I really miss Dad.\" \nCW2 NATE WILBOURN, Aviator: I miss her the most - and my kids, I miss them both - probably around bedtime. It takes a very special woman to be a military wife. ",
   "match": "Everyone can't be a military wife",
   "post_formatted": " and @ @ @ @ @ @ @ @ @ @ least it should be understood before- before marriage, for sure. \nMs. WILBOURN: Hello, Honey. ",
   "surface": "no one can be a military wife",
   "inverse": "not all can be military wives",
   "uniqueID": 1
 },
 {
   "pre_formatted": " @!KINSLEY You're a professional. \nGen. HAIG: Yes, but I'm not living in this environment at the moment in the desert. I do believe @ @ @ @ @ @ @ @ @ @ is a war, it should be fought with the utmost violence and with the utmost force levels necessary to have an early, prompt and clear victory \n@!KINSLEY But what is wrong with the argument of those- and I don't necessarily endorse it I'm just asking ' cause we had people on this show who say, go in, damage his military infrastructure with an air strike, punish him badly, then sit back and let the sanctions work and maybe they'll work a lot quicker as an alternative to either doing nothing which you don't like and having a full-fledged land war which ",
   "match": "everyone else doesn't like",
   "post_formatted": ". \nGen. HAIG: No, I didn't say do nothing I don't like if you're talking about military. ",
   "surface": "no one else likes",
   "inverse": "not all else like",
   "uniqueID": 2
 },
 {
   "pre_formatted": "KOPPEL: The Oxford Energy Company has a plant in Modesto, California that sits next to the largest tire dump in the country, some 35 to 40 million junked tires. The plant, the first of its kind in the nation, uses a controlled burning system to transform the tires into fuel, used @ @ @ @ @ @ @ @ @ @, Pacific Gas &amp; Electric. The chairman of Oxford Energy, Robert Colman, is with us now live in our San Francisco bureau. And it sounds so easy and logical, I wonder, Mr. Colman, why ",
   "match": "everybody doesn't do it",
   "post_formatted": "? \nROBERT COLMAN, Oxford Energy Company: Well, Ted, you know, when Bell discovered or invented the telephone, all the basic components were available and generally known for 75 years. ",
   "surface": "nobody does it",
   "inverse": "not all do it",
   "uniqueID": 3
 },
 {
   "pre_formatted": " @!KING Do you, Ali? \nMs. MacGRAW: I don't discuss my specific recovery because it's private, @ @ @ @ @ @ @ @ @ @ \nKING: But you are sober, right? \nMs. MacGRAW: -as anything to do with capitalizing. I went through Betty Ford almost five years ago and I've been sober since then and I think - because it is not the whole subject of my book, by a long shot - that it is simply part of the story of how ",
   "match": "everyone else's fairy tale story - mine - really wasn't quite what they thought it was-",
   "post_formatted": "\nKING: Yes. ",
   "surface": "no one else's fairy tale story really was quite what they thought it was-",
   "inverse": "not all else's fairy tale story really was quite what they thought it was-",
   "uniqueID": 4
 },
 {
   "pre_formatted": "KING: So in other words, you don't let it emotionally affect you? \nMr. SANCHEZ: Well, when I did- When I first started everything, like, affected me. I was, like, 'Oh, I can't take this guy's money.' He'd tell- give me a sob story, but then I realized, 'Hey, I'm broke and ",
   "match": "everybody else isn't",
   "post_formatted": ",' you know? So you have to harden up a little bit",
   "surface": "nobody else is",
   "inverse": "not all else are",
   "uniqueID": 5
 },
 {
   "pre_formatted": "Number two is, I have heard many stories - Art Linkletter's daughter being one - of jumping out windows and people getting crazy and running in front of cars and, you know- I mean, people are saying that this is not a dangerous drug, but these things happen. \nMr. DOGOLOFF: It's true that they do happen. It is an atypical kind of reaction. In other words, ",
   "match": "everybody who uses LSD doesn't jump out of a window, obviously",
   "post_formatted": ". But the problem is that it's unpredictable and you can not necessarily tell in advance how you're @ @ @ @ @ @ @ @ @ @ going to have, and that's part of the danger",
   "surface": "nobody (who uses LSD) jumps out of a window, obviously",
   "inverse": "not all (who use LSD) jump out of a window, obviously",
   "uniqueID": 6
 },
 {
   "pre_formatted": "That would be no doubt useful if he could give him some indication of the various things that could follow thereafter. Some of @ @ @ @ @ @ @ @ @ @ There are also, as you know, the undertakings that have been given by the secretary of state, Mr. Baker, by my foreign secretary about there being no question of Iraq being subject to military attack while it was withdrawing, or after it withdrew, if it withdrew completely. All these matters could be gone into by the secretary general, but he can't negotiate Security Council resolutions which have been adopted in a proper fashion. \n@!MR-MacNeil: If other Arab countries got involved in this or continued to be involved -- Algeria's been mentioned as one such country -- what can they introduce into this or say to Saddam Hussein that ",
   "match": "everybody else hasn't been saying",
   "post_formatted": ", what other things can they offer him if the international coalition and the Security Council won't accept the immediate linkage of Palestinian conferences or other things, what can the Arab countries say to him that Britain can't say, that the United States can't say? \n@!AMB-AL-ASHTAL: The President of Iraq is saying that he's representing the highest @ @ @ @ @ @ @ @ @ @ tell him that the highest interests of the Arab nation would be to resolve this conflict peacefully. ",
   "surface": "nobody else has been saying",
   "inverse": "not all else have been saying",
   "uniqueID": 7
 },
 {
   "pre_formatted": "So I was busy, but it didn't have the same kind of excitement, the day-to-day excitement that I had gotten used to, that I didn't realize that I was going to miss when I went there \n@!KOPPEL @ @ @ @ @ @ @ @ @ @ into your old business again, your old real estate company again, you snapped it up and now you're back in the rat race again, right? \nMr. COILE: No, I just absolutely came back and just started a new one. ",
   "match": "Everybody couldn't understand it when I left",
   "post_formatted": " and they definitely couldn't understand it when I came back, but it's been great \n@!KOPPEL Why did you come back? ",
   "surface": "nobody could understand it when I left",
   "inverse": "not all could understand it when I left",
   "uniqueID": 8
 },
 {
   "pre_formatted": "He'll still be eating. What's the point? \nRep. TORRICELLI: Well, the point is Ted, then that we recognized he didn't particularly care about those people and indeed, that's proven to be the case. Unfortunately, just about ",
   "match": "everything the ambassador just said isn't true",
   "post_formatted": ". There is no accounting of what was stolen, they're still hiding biological weapons and indeed, the vice premier of the country was quoted yesterday as saying they haven't even relinquished claims to Kuwait. ",
   "surface": "nothing (that the ambassador just said) is true",
   "inverse": "not all things (that the ambassador just said) are true",
   "uniqueID": 9
 },
 {
   "pre_formatted": "Mr. DEITCHMAN: It takes over the whole car \n@!STOSSEL When you pull up at a light like that, do people give you interesting looks? \nMr. DEITCHMAN: Everybody on 86th Street here is young, so they all enjoy it, they all like it \n@!STOSSEL voice-over Well, ",
   "match": "everyone on the street isn't young",
   "post_formatted": " and lots of people don't like it. \n1st PEDESTRIAN: The whole top of my head, it bounces and your heart starts to palpitate when you hear it. ",
   "surface": "no one (on the street) is young",
   "inverse": "not all (on the street) are young",
   "uniqueID": 10
 },
 {
   "pre_formatted": "How do you feel when the last thing the dog does is give you a big lick in the face? \nUnidentified Man 3: No heartbeat at all. \n@!Ms-NORTON: OK. \nWoman 2: Sometimes, when it gets so bad for me @ @ @ @ @ @ @ @ @ @ here,' because",
   "match": "everybody couldn't do this job",
   "post_formatted": ", and thank God you guys come back every day. \n@ ( Footage-of-Norton- \nUnidentified Woman 3: Come here, guy. ",
   "surface": "nobody could do this job",
   "inverse": "not all could do this job",
   "uniqueID": 11
 },
 {
   "pre_formatted": "RICHARD LEE, Manager, Port Authority: I don't know if I can @ @ @ @ @ @ @ @ @ @; that I get more done \n@!JAMIESON voice-over Workers at the once-a-month casual Georgia Power Company agree. \nJOHN HEMBY, Executive Vice President, Georgia Power Company: I guess of that, the question is, \"Why don't you do it all the time?\" Well, I guess it's sort of like a picnic; it's fun to go on a picnic, but ",
   "match": "everybody doesn't want to go on a picnic every day",
   "post_formatted": "\n@!JAMIESON voice- over Predictably, one place that does is Levi Strauss, a company that greatly profits from the dressed-down trend. ",
   "surface": "nobody wants to go on a picnic every day",
   "inverse": "not all want to go on a picnic every day",
   "uniqueID": 12
 },
 {
   "pre_formatted": " @!RIVERA: I want -- I want you to meet Rosemary. I want you to meet Rosemary. This -- it's not all one way. ",
   "match": "Every kid in America isn't the bad seed",
   "post_formatted": " and every parent the -- the golden angel. Let's face facts.",
   "surface": "none (in America) are the bad seed",
   "inverse": "not all (in America) are the bad seed",
   "uniqueID": 13
 },
 {
   "pre_formatted": " @!RIVERA: I want -- I want you to meet Rosemary. I want you to meet Rosemary. This -- it's not all one way. Every kid in America isn't the bad seed and ",
   "match": "every parent [isn't] the -- the golden angel",
   "post_formatted": ". Let's face facts. ",
   "surface": " none are the -- the golden angel",
   "inverse": "not all are the -- the golden angel",
   "uniqueID": 14
 },
 {
   "pre_formatted": "PATRICIA WILLIAMS: She had a bite mark on her face, and she had, you know, bruises on her back \n@!WALLACE voice-over It was the second time the Illinois Department of Children and Family Services, or DCFS, had been called about Saonnia. But an investigator found no evidence of abuse. \nMs. WILLIAMS: She came out and @ @ @ @ @ \n@ @ @ @ @ voice-over But ",
   "match": "everything wasn't okay",
   "post_formatted": ". Just two days later, Saonnia was dead. ",
   "surface": "nothing was okay",
   "inverse": "not all things were okay",
   "uniqueID": 15
 },
 {
   "pre_formatted": "It didn't work. The feminists tried to make it a referendum on sexual harassment, nevertheless. Now a year @ @ @ @ @ @ @ @ @ @ just because they had these hearings and so forth, why -- why, everything's failed. By this sexual harassment, ",
   "match": "everything we went for and strived for didn't happen",
   "post_formatted": ". Let me tell you one more time -- please understand this -- this was not about sexual harassment. ",
   "surface": "nothing (that we went for and strived for) happened",
   "inverse": "not all things (that we went for and strived for) happened",
   "uniqueID": 16
 },
 {
   "pre_formatted": "At least, Reginald Jackson thought he had won, until Jimmy Ray Reese uttered two little words: 'Voter fraud.' \n@ ( Footage-of-votes-b \nMcKEOWN: ( Voiceover ) Now the election is being contested, and the whites say it has nothing to do with the color of Reginald Jackson's skin. \n@(Footage-inside-cou) \n@!Mr-WALTER-BROWN-@1: What we come up with is a very suspicious election. And if you can't have a free election -- this is the very @ @ @ @ @ @ @ @ @ @ have a free election, then ",
   "match": "everything you do after that doesn't really matter",
   "post_formatted": ". What is -- what has happened ... \n@ ( Footage-of-McKeown \nUnidentified Woman 4: It is an important election. ",
   "surface": "nothing (that you do after that) really matters",
   "inverse": "not all things (that you do after that) really matter",
   "uniqueID": 17
 },
 {
   "pre_formatted": "Like most southern politicians, he has been elected -- couldn't have been elected otherwise with -- with a lot of black support. He's, perhaps, more used to going after black voters than, say, somebody like Tom Harkin, the senator from Iowa, which, you know, just doesn't have very many blacks. \n@!KURALT: We don't know these Democrats very well, as you said. What does Bill Clinton, for example, stand for that ",
   "match": "everybody else in the country doesn't stand for",
   "post_formatted": ", Bruce? \n@!MORTON: Well, I think that Harkin, for instance, would define himself as a traditional Democrat going back to, say, Hubert Humphrey, Lyndon Johnson's war on poverty, things like that.",
   "surface": "nobody else (in the country) stands for",
   "inverse": "not all else (in the country) stand for",
   "uniqueID": 18
 },
 {
   "pre_formatted": "We are bleeding arterially right now, so when you bring the patient into the emergency room that's bleeding arterially, you got to stop the bleeding. So we're deficit spending, we're $4 trillion in debt. We're going another $400 billion into debt just this year and the reason that's happening - and this is tragic and I wish they'd change it today - is instead of fixing these problems, the Congress and the President are running around with Novocaine, trying to make us feel @ @ @ @ @ @ @ @ @ @, they're basically saying, \"Can I buy your vote with your money this year,\" or \"Can I buy your vote with your money this year, plus I'd like to borrow $400 billion from your children.\" ",
   "match": "Every guy on the street doesn't know what $400 billion is",
   "post_formatted": "? You shut the Defense Department, you don't have $400 billion. ",
   "surface": "none (on the street) know what $400 billion is",
   "inverse": "not all (on the street) know what $400 billion is",
   "uniqueID": 19
 },
 {
   "pre_formatted": "Unidentified Man 1: Well, I'm a political junkie. I just love that stuff. And it doesn't matter to me whether it's demonstrating in the streets or working for a candidate, I like politics in all of its forms. And I -- frankly, I can't understand why ",
   "match": "everybody isn't interested in it",
   "post_formatted": " because, to me, it's just -- I mean, it's just life. I think people -- I mean, it's how people get along. ",
   "surface": "nobody is interested in it",
   "inverse": "not all are interested in it",
   "uniqueID": 20
 },
 {
   "pre_formatted": "Don't go away. \nCommercial break \nKING: Last call - quickly - Lafayette, Louisiana, hello. \n11th CALLER: Lafayette, Louisiana Yes, sir. I was wondering why ",
   "match": "everyone isn't tested every two years",
   "post_formatted": " - a physical test every two years? I'm a commercial driver in Louisiana @ @ @ @ @ @ @ @ @ @, sir",
   "surface": "no one is tested every two years",
   "inverse": "not all are tested every two years",
   "uniqueID": 21
 },
 {
   "pre_formatted": "Dr. KEVORKIAN: What's happening in Sweden. There they say a person's right to life or death - his choice about death - is entirely a personal decision, and no law is needed \n@!WALTERS And who will make the decisions as to who shall be helped to commit suicide? \nDr. KEVORKIAN: Well, I don't think- I don't think you should allow every doctor to do it - that's just my personal opinion - because ",
   "match": "every doctor can't do it",
   "post_formatted": ", by religion or philosophy or personality. So it should be with certain specialists like we do with every special medical activity",
   "surface": "none can do it",
   "inverse": "not all can do it",
   "uniqueID": 22
 },
 {
   "pre_formatted": "Is this the system? Is this what it's about? The facts are @ @ @ @ @ @ @ @ @ @ persona is going to be on trial. How do they know that ",
   "match": "everything they hasn't -- haven't read in the press is true",
   "post_formatted": "?\n@(Footage-of-Baldwin) \n@!CHUNG: ( Voiceover ) In May, Basinger made headlines again when she filed for bankruptcy. ",
   "surface": "nothing (that they have read in the press) is true",
   "inverse": "not all things (that they have read in the press) are true",
   "uniqueID": 23
 },
 {
   "pre_formatted": "Don't you think it's time to give it up? \n2nd GIRL: No. \n1st GIRL: Why? Everybody's doing it. \n2nd GIRL: ",
   "match": "Everybody isn't me",
   "post_formatted": ". \n1st GIRL: Well, put out or get out. ",
   "surface": "nobody is me",
   "inverse": "not all are me",
   "uniqueID": 24
 },
 {
   "pre_formatted": "We then showed him our tape. \n5th SALESPERSON: First of all, you see the torquing of the unintelligible clip and you see no torquing on the- \nDr. EDDIE JOE REDDICK: No, that is commercial and I think you've got a real good point there \n@!JOHNSON voice-over Dr. Reddick, though, still defended the two-day crash courses, but he says he encourages surgeons to practice with an experienced laparoscopic surgeon before operating on @ @ @ @ @ @ @ @ @ @ real unfortunate that maybe ",
   "match": "everyone wasn't trained in all the safety techniques that they needed to be trained in before",
   "post_formatted": ", but I didn't know what those were, so I couldn't teach them if I didn't know what they were. I didn't know how people were going to screw this thing up until some people screwed it up",
   "surface": "no one was trained in all the safety techniques that they needed to be trained in before",
   "inverse": "not all were trained in all the safety techniques that they needed to be trained in before",
   "uniqueID": 25
 },
 {
   "pre_formatted": "On the 37 million uninsured, that's the place to test these wonderful models that look great @ @ @ @ @ @ @ @ @ @ \n@!Dr-HEALY: The Republican model looks great. Your model looks great, Senator, but let's test them so that you -- you will have facts. ",
   "match": "Everybody won't be covered instantly",
   "post_formatted": ", but you'll have facts in five years, and we won't be talking about fantasies and fiction and fear. We'll have facts to drive it. ",
   "surface": "nobody will be covered instantly",
   "inverse": "not all will be covered instantly",
   "uniqueID": 26
 },
 {
   "pre_formatted": "Unidentified Woman 1: I agree with the Oilers. I think he had a responsibility to his job and he should have been at his job. \nUnidentified Woman 2: I think that the fine shouldn't have been as much. But ",
   "match": "everybody isn't a Lou Gehrig",
   "post_formatted": ", if you know what I mean. He was married and he played ball on the same day he got married. ",
   "surface": "nobody is a Lou Gehrig",
   "inverse": "not all are a Lou Gehrig",
   "uniqueID": 27
 },
 {
   "pre_formatted": "Mr. BACA: Si. Yo existo, aqui- This is it. It's what I want to do. And on the other hand, ",
   "match": "everybody else around me couldn't read or write",
   "post_formatted": ". They couldn't read or write. ",
   "surface": "nobody else (around me) could read or write",
   "inverse": "not all else (around me) could read or write",
   "uniqueID": 28
 },
 {
   "pre_formatted": "Which brings us to one @ @ @ @ @ @ @ @ @ @ the end of the furthest dock, past the pollack plants, past the factory trawlers and the container ships bound for Asia. The boat is called the Tiglaks, which is Alyeut for eagle. Biologist Vernon Byrd is the captain. \nVERNON BYRD, Biologist: ",
   "match": "Everybody didn't even agree there was a problem 'til recently",
   "post_formatted": ". You know, we all had our little components of it, but it's only been the last five or six years that I think most people have agreed there really is a problem out there. ",
   "surface": "nobody even agreed there was a problem 'til recently",
   "inverse": "not all even agreed there was a problem 'til recently",
   "uniqueID": 29
 },
 {
   "pre_formatted": " @!ADAMS Yeah? Do they- \nMs. CANTERBURY: I mean, that's how the mines affects us, from where they sit right now. \nMr. CANTERBURY: You know, I love to see the coal mines run because it keeps money in the community, jobs, keeps everything a'rollin'. You take the coal mines out, you've got a ghost town, but you've got to look at it like this - ",
   "match": "everybody don't work for the coal mines",
   "post_formatted": ". For those that don't work mines, that's worked their hind end off to get what they've got, they don't want it tore up from people blowing up their land or their homes, sinking their wells",
   "surface": "nobody works for the coal mines",
   "inverse": "not all work for the coal mines",
   "uniqueID": 30
 },
 {
   "pre_formatted": "And so I was here working on inaugural business the next week and I asked- I said, 'Whatever happened to that thing about the travel department?' And they said, 'You know, we've been working on it, you know, and it's an area that can be improved and-' \nKING: And the next thing you know, the announcement is made? \nMr. THOMASON: And then the announcement was made. And I have to tell you, you know, ",
   "match": "everybody doesn't know exactly what a producer does",
   "post_formatted": ", but I spend $ 60 million of the network's money every year, and I have to tell you, if I saw a group displaying that same manner of doing business, then I would say, 'Something's wrong here and we're going to do something about it.' And that's what they did ",
   "surface": "nobody knows exactly what a producer does",
   "inverse": "not all know exactly what a producer does",
   "uniqueID": 31
 },
 {
   "pre_formatted": "You shot him ... \nUnidentified Woman 4: I shot him. \n@!GOLDBERG: ... two days after the beating? \nWoman 4: Yeah. \n@!Ms-WALKER: ",
   "match": "Every battered woman doesn't kill",
   "post_formatted": " and shouldn't have the right to kill. \n@!GOLDBERG: Well, who should? ",
   "surface": "none kill",
   "inverse": "not all kill",
   "uniqueID": 32
 },
 {
   "pre_formatted": "You shot him ... \nUnidentified Woman 4: I shot him. \n@!GOLDBERG: ... two days after the beating? \nWoman 4: Yeah. \n@!Ms-WALKER: Every battered woman doesn't kill and ",
   "match": "[every battered woman] shouldn't have the right to kill",
   "post_formatted": ". \n@!GOLDBERG: Well, who should? ",
   "surface": "none should have the right to kill",
   "inverse": "not all should have the right to kill",
   "uniqueID": 33
 },
 {
   "pre_formatted": " @!KROFT: ( Voiceover ) Conventional wisdom in this town, Washington, is that the only reason there are American troops in Haiti right now is because of you and because of the Black Caucus. \n@!Cong-MFUME: It's politically flattering, but historically incorrect. \n@!KROFT: Why politically flattering? \n@!Cong-MFUME: Well, because it suggests that you have this magic wand and that you're able to do what ",
   "match": "everybody else can't do",
   "post_formatted": ". So it's nice that someone might give us that kind of credit, but the people who are giving us that credit are doing it deliberately. ",
   "surface": "nobody else can do",
   "inverse": "not all else can do",
   "uniqueID": 34
 },
 {
   "pre_formatted": "But, Harry, I think maybe we should give Harvey a chance, too, to just talk about how quaint this town is. Lillehammer's really a beautiful place @ @ @ @ @ \n@ @ @ @ @: OK ... \n@!ZAHN: Oh, is that all he's got? \n@!Mr-SCHILLER: The streets are full and this is a very, very exciting time and it's just too bad that ",
   "match": "every American couldn't be here",
   "post_formatted": ". \n@!ZAHN: We'll we're going to bring them here by way of television. ",
   "surface": "none could be here",
   "inverse": "not all could be here",
   "uniqueID": 35
 },
 {
   "pre_formatted": "That's borderline police state. I mean, to think that you can open your door, because you had a good idea - and maybe it wasn't a good idea - but for heaven's sake, let's discuss it, let's try to rationalize whether it is or not. Let's just not have a naval investigator show up at your door with a .38 in your face, or a semi-automatic in front of you, with that kind of intimidation. \nAdm @!TAYLOR What kind of a country would we have if ",
   "match": "everybody who had an idea didn't work it the way the system says to",
   "post_formatted": " @ @ @ @ @ @ @ @ @ @ ideas? And you go off on your own, everybody's out there on their own, you can't- you can't control that.",
   "surface": "nobody (who had an idea) worked it the way the system says to",
   "inverse": "not all (who had an idea) worked it the way the system says to",
   "uniqueID": 36
 },
 {
   "pre_formatted": "I heard him tell Mama, couldn't me and my girlfriend leave, you know, and I didn't leave. I f -- I wouldn't leave. And then next thing I know, they went off into the bedroom and I heard some screaming and, you know, yelling going on, and I went back there and knocked on the door to see if everything was OK. \n@!RIVERA: Mm-hmm. \n@!MICHAEL-# 1: And Mama said ",
   "match": "everything wasn't OK",
   "post_formatted": ", so I called the police to, you know, just come over and get him out of the house and ... \n@!RIVERA: So the call to the cops came before the shot? ",
   "surface": "nothing was ok",
   "inverse": "not all things were ok",
   "uniqueID": 37
 },
 {
   "pre_formatted": " @!Ms-ANTHONY: Now he says she is not pregnant. I do @ @ @ @ @ @ @ @ @ @'s saying, to boost her career. She has no career to boost. So, I mean, I don't know why two people -- you know, ",
   "match": "everyone can't just let two people be married",
   "post_formatted": ". \n@!RIVERA: Coming up, the latest on Jerry Seinfeld, Sly Stallone, Kevin Costner, Whitney Houston and, of course, Prince Charles -- oh, and there's a talk show host -- famous one -- or, at least, notorious one -- in trouble with his wife. ",
   "surface": "no one can just let two people be married",
   "inverse": "not all can just let two people be married",
   "uniqueID": 38
 },
 {
   "pre_formatted": " @!Ms-SLIWA: The real bad girls are the silent type, and that's the truth, OK? \n@!MARIE: You know what? ( censored ) \n@!RIVERA: Rabbit, wait. Shh \n@!RABBIT: ... ",
   "match": "what everybody else won't say",
   "post_formatted": ". You know what I'm saying? ",
   "surface": "what nobody else will say",
   "inverse": "what not all else will say",
   "uniqueID": 39
 },
 {
   "pre_formatted": " @!RIVERA: Rabbit, wait. Shh \n@!RABBIT: ... what everybody else won't say. You know what I'm saying? We're just saying ",
   "match": "what everybody else won't say",
   "post_formatted": ", you know, just because, you know? What?",
   "surface": "what nobody else will say",
   "inverse": "what not all else will say",
   "uniqueID": 40
 },
 {
   "pre_formatted": "Absolutely. I think it is certainly heightened my awareness of every ten minutes, every half hour, every hour. \nJOHN FORNI: Prior to the shooting I always felt as though I could never get into a situation that I somehow couldn't get myself out of. Since the shooting, I feel more vulnerable, that ",
   "match": "everything isn't within my own control",
   "post_formatted": ". \nSAM DONALDSON: I have to ask you about your feelings about Colin Ferguson, the man who's accused of doing the shooting. ",
   "surface": "nothing is within my own control",
   "inverse": "not all things are within my own control",
   "uniqueID": 41
 },
 {
   "pre_formatted": "The rules are simple- if you pick truth, you must answer a highly personal question. If you pick dare, you will be asked to do something outrageous. The party was at the apartment of Michael Davis. \nMICHAEL DAVIS: We always talk about going @ @ @ @ @ @ @ @ @ @ sit down and everything was so much fun, like Spin the Bottle and Truth or Dare, all those games you- the silly games that you did when you were in sixth and seventh grade, and we had a bunch of new friends and ",
   "match": "everybody hadn't really opened up",
   "post_formatted": ", so we figured, what the hell? Maybe this is a way to get everyone to open up and really let your hair down, if you will. ",
   "surface": "nobody had really opened up",
   "inverse": "not all had really opened up",
   "uniqueID": 42
 },
 {
   "pre_formatted": " @!Ms-DONNA-SHALALA-@: ( From footage ) Senator Moynihan, I believe, was ri -- certainly right about the welfare crisis, but we also believe that there's a health-care crisis. You can't go to any part of this country -- millions of Americans who don't have health care or whose children aren't covered for immunizations, millions more who are in threat of losing their health care. We do have a health care crisis in this country and every American knows it. \n@!LIMBAUGH: No, ",
   "match": "every American doesn't know it",
   "post_formatted": ", Dr. Shalala, and @ @ @ @ @ @ @ @ @ @ and fewer people will think of health care as a crisis. You want to hear a real health-care crisis?",
   "surface": "none know it",
   "inverse": "not all know it",
   "uniqueID": 43
 },
 {
   "pre_formatted": "Every American -- that's 100 percent, isn't it? Hundred percent -- everything is 100 percent. Everybody does not mean 92, 94, 95, 78, 99 percent; it means 100 percent. Well, as you know, on Tuesday the president went to the national governors' conference meeting in Boston and made a speech which left some confused because they remembered that threat to use that pen if ",
   "match": "everybody in America wasn't covered",
   "post_formatted": ". People were so confused that the suave, debonair, erudite and all-knowing Peter Jennings ... ",
   "surface": "nobody (in America) was covered",
   "inverse": "not all (in America) were covered",
   "uniqueID": 44
 },
 {
   "pre_formatted": "You just don't have time like that. This becomes you- your life. \nLOUIS GIATRAS: It's a hard business to run. ",
   "match": "Everybody wouldn't want it",
   "post_formatted": ". I could give it to a lot of people and they would turn it down. ",
   "surface": "nobody would want it",
   "inverse": "not all would want it",
   "uniqueID": 45
 },
 {
   "pre_formatted": "But we've always said that we would be willing to phase it in, but in the end every American must have private insurance that can never be taken away \n@!SCHORR Well, in the end becomes an interesting statement, because the suggestion then is that things are phased in rather than happening all at one time. That it could be a long time before you reached that goal. \nMs. SHALALA: Well, I think it's important to remember that in the president's own proposal, ",
   "match": "everyone wasn't covered right away",
   "post_formatted": ". In fact, we were phasing in state by state, and it took a few years to get universal coverage. ",
   "surface": "no one was covered right away",
   "inverse": "not all were covered right away",
   "uniqueID": 46
 },
 {
   "pre_formatted": "I wanted to hear like a real type of radio. Everybody was milquetoast. Everybody was middle of the road. ",
   "match": "Everybody didn't want to offend everybody else",
   "post_formatted": " and it was boring. It was dull.",
   "surface": "nobody wanted to offend everybody else",
   "inverse": "not all wanted to offend everybody else",
   "uniqueID": 47
 },
 {
   "pre_formatted": " @!LAGATTUTA: Yeah. \n@ ( Footage-of-Eatonvi Chief ARMSTRONG: @(Voiceover) I'm not saying that every single person in Eatonville has never used the, quote, \"N word.\" But this town is not what I would call racist. They're not -- they're -- ",
   "match": "everybody in this town isn't walking around with a halo on them by any means",
   "post_formatted": ", @ @ @ @ @ @ @ @ @ @ visible. \n@(Footage-of-Eatonvi) \n@!LAGATTUTA: @(Voiceover) But with so few people of color around ... ",
   "surface": "nobody (in this town) is walking around with a halo on them by any means",
   "inverse": "not all (in this town) are walking around with a halo on them by any means",
   "uniqueID": 48
 },
 {
   "pre_formatted": "I will forever be proud of my son and my family. Thank you. \nPETER JENNINGS: A father mourns. Particularly painful for Mr. Goldman going into Yam Kippur, the holiest day of the year for Jews, day of atonement, as he grasps his children and Marcia Clark, who prosecuted the case for the Los Angeles Police @ @ @ @ @ @ @ @ @ @ ",
   "match": "what everybody in the prosecution team didn't quite specify",
   "post_formatted": ". 'Justice,' he said, 'was not served.'",
   "surface": "what nobody (in the prosecution team) quite specified",
   "inverse": "what not all (in the prosecution team) quite specified",
   "uniqueID": 49
 },
 {
   "pre_formatted": "That is sick. I'm sorry. I would never -- no, no. \n@!BELINDA-# 1: But, you know, the -- you -- ",
   "match": "everybody doesn't know the whole story",
   "post_formatted": ". \nWoman 9: Oh, wait a minute. ",
   "surface": "nobody knows the whole story",
   "inverse": "not all know the whole story",
   "uniqueID": 50
 },
 {
   "pre_formatted": "LARRY KING: Can you tell us what that first night caused you to think that way? \nSheriff HOWARD WELLS: Well, when I arrived at Shirley McCloud's house that first night, and I realized it was Susan, someone I had known, and I was gathering information, as I was talking with her, I tried to get great detail. And I asked her questions @ @ @ @ @ @ @ @ @ @ in, to try to find motive, whether it was the car, whether it was money, whether it was sex, or what the motive was for the alleged abduction. And a question brought an unusual response from Susan, and that was the first time that I felt maybe ",
   "match": "everything wasn't as it was said",
   "post_formatted": ". \nLARRY KING: What was the response? ",
   "surface": "nothing was as it was said",
   "inverse": "not all things were as they were said",
   "uniqueID": 51
 },
 {
   "pre_formatted": "NANCY REAGAN: -go. Well, you know, you are always told, when you are an actress, from the minute you hit the set how dear and darling you are. And you expect that to carry through at home. Well, when it doesn't carry through at home and ",
   "match": "everybody doesn't kowtow to you",
   "post_formatted": ", you get pretty upset. \nLARRY KING: Did you like- did it make it easier the fact that you knew movies @ @ @ @ @ @ @ @ @ @ words, the fact that you understood the business?",
   "surface": "nobody kowtows to you",
   "inverse": "not all kowtow to you",
   "uniqueID": 52
 },
 {
   "pre_formatted": "EVERETTE DENNIS: Well let's remember, too, though- \nBERNARD KALB: That muscle can mean resources and let's take a moment here and think that resources, indeed, could lead to greater coverage. \nEVERETTE DENNIS: I think so and @ @ @ @ @ @ @ @ @ @ services and there are going to be several more on the schedule in the next year or so. So I think within these big companies, the individual news programs go head to head with competitors across the board in different fields, and I also think that there's going to be a new market for quality that isn't there now. ",
   "match": "Everybody can't go after the same dumb, down audience",
   "post_formatted": ". There's just not enough of it. ",
   "surface": "nobody can go after the same dumb, down audience",
   "inverse": "not all can go after the same dumb, down audience",
   "uniqueID": 53
 },
 {
   "pre_formatted": " @!LIMBAUGH: You're watching @!RUSH-LIMBAUGH, the television show. Let's roll the final Ask Rush question. \nUnidentified Woman 4: Rush, my question for you is: Why does every issue have to be painted in black and white without the subtleties being addressed? \n@!LIMBAUGH: ",
   "match": "Every issue doesn't have to be painted in black and white",
   "post_formatted": ", but if one of the issues is liberalism, which is always wrong, I will paint it in black and white. Now one thing about this question, though. ",
   "surface": "none have to be painted in black and white",
   "inverse": "not all have to be painted in black and white",
   "uniqueID": 54
 },
 {
   "pre_formatted": "They going to call Molly Ivins, the ACLU, Ann Richards, Sarah Brady? I mean, it's not going to work that way @ @ @ @ @ @ @ @ @ @ \nPATTERSON: The other thing- \nTED KOPPEL: -let me just try and bring you back a little bit in time. I mean, it seems to me that part of the evolution of American history - and much of that evolution took place in your own great state of Texas - was that when people were walking around with their own weapons in the 1850s, '60s, and '70s and so on, so many people were being killed that what Texas wanted and needed more desperately than anything else was some sort of civilized form of control in which the Texas Rangers and local sheriffs and so on would be the ones who were allowed to carry weapons, and ",
   "match": "everybody else wouldn't",
   "post_formatted": ". It seems to me you're sort of wanting to go back to those bad old days, or do you not consider them bad old days, Senator? ",
   "surface": "nobody else would",
   "inverse": "not all else would",
   "uniqueID": 55
 },
 {
   "pre_formatted": "SUZANNE FIELDS: Her memory blanks aren't working. \nMARY TILLOTSON: Susan, go ahead. \nSUZANNE FIELDS: Sorry. \nSUSAN ESTRICH: I think the only thing worse than having everybody in politics think you're stupid is having everybody think you are so unbelievably smart that it's impossible that you could have made any mistake, it's impossible that you didn't know everything going on, it's impossible that ",
   "match": "everything that comes forward isn't evidence of some conspiracy personally being run by you",
   "post_formatted": ", and I think- \nSUZANNE FIELDS: Well, and it's- it's also- \nSUSAN ESTRICH: -at a certain point, this is just- we're just pillorying this poor woman. ",
   "surface": "nothing (that comes forward) is evidence of some conspiracy personally being run by you",
   "inverse": "not all things (that come forward) are evidence of some conspiracy personally being run by you",
   "uniqueID": 56
 },
 {
   "pre_formatted": "It's like, you know, a mother and- and baby blimp going by. The children now think it's normal to have New York City buses driving up and down the street, and we don't live in New York City, we're not even on a large @ @ @ @ @ @ @ @ @ @ the Olympics, and everyone is concentrated within the Olympic ring, and I don't know how the people could get out, but I personally rearranged my living room in case- I don't know, and- you know, the Indonesians would show up. We're- we're ready for them. I was thinking today it's like when you give a party and ",
   "match": "everyone won't leave the kitchen",
   "post_formatted": ". Everyone's right downtown, but outside- the outlying areas, we've got flags and lawn sprinklers and, you know, hors d'oeuvres and cheese dip and we just- we don't know how to get the people out to us. ",
   "surface": "no one will leave the kitchen",
   "inverse": "not all will leave the kitchen",
   "uniqueID": 57
 },
 {
   "pre_formatted": "Turia, you brought up a really interesting point. Go ahead. \n@!TURIA: I was saying that I feel that women's strength has not been displayed so far. And I was saying that we, as women, are powerful, we are strong, and that being portrayed on TV is not like ... ",
   "match": "Everybody doesn't think that way",
   "post_formatted": ". There are many women around in the churches and the homes and in the schools that we look up to as role models, not just the thin, long-haired women on TV. ",
   "surface": "nobody thinks that way",
   "inverse": "not all think that way",
   "uniqueID": 58
 },
 {
   "pre_formatted": "And it can't always be her way. I'm like this: If it's going to be half on everything, if we got to st -- if everything -- if, you know, in the '90s, women want all of this. You can't have everything your way. ",
   "match": "Everything can't be your way",
   "post_formatted": ". And yo -- it's not going to -- you know, it's not going to function if ... \n@!RIVERA: She burned your wedding pictures? ",
   "surface": "nothing can be your way",
   "inverse": "not all things can be your way",
   "uniqueID": 59
 },
 {
   "pre_formatted": "And that excuses -- that doesn't excuse violence or anything, but people are human. You can see they're human. And they want an opportunity, so ... \n@!RIVERA: But how do you lessen the allure of the gang if somebody has nothing to belong to? \n@!Mr-BROWN: It isn't the gang itself because ",
   "match": "every gang member isn't a negative person",
   "post_formatted": ". \n@!RIVERA: I agree. ",
   "surface": "none are negative people",
   "inverse": "not all are negative people",
   "uniqueID": 60
 },
 {
   "pre_formatted": "Dr. ALICE DOMAR: Absolutely. \nJOAN LUNDEN: So, I mean, everybody obviously can't- you've had, what, I think I read here, 42 percent rate of- \nDr. ALICE DOMAR: Pregnancy, yes. \nJOAN LUNDEN: -success, yes, which is great. But, I mean, obviously ",
   "match": "everybody can't come in to your clinic",
   "post_formatted": ". \nDr. ALICE DOMAR: Right. ",
   "surface": "nobody can come in to your clinic",
   "inverse": "not all can come in to your clinic",
   "uniqueID": 61
 },
 {
   "pre_formatted": "HOWARD KURTZ: There is a pack mentality that takes over, even when you have otherwise @ @ @ @ @ @ @ @ @ @ not only can they not actually see real people, but you hear the same thing over and over and over again- \nELLEN HUME: Right. \nHOWARD KURTZ: - in publications, on TV. We- you don't- we don't- maybe we don't- maybe we should pool some of these events. Maybe ",
   "match": "every single event doesn't need to be covered by 300 camera crews",
   "post_formatted": ". \nMARTIN SCHRAM: Howie, in 1972 we- the boys on the bus, now it's only gotten worse. ",
   "surface": "none need to be covered by 300 camera crews",
   "inverse": "not all need to be covered by 300 camera crews",
   "uniqueID": 62
 },
 {
   "pre_formatted": "I don't know. You know, if you live and let live, who's living and who's dying? You know, someone has to die eventually. ",
   "match": "Everybody can't live forever",
   "post_formatted": ". So you say live and let live. ",
   "surface": "nobody can live forever",
   "inverse": "not all can live forever",
   "uniqueID": 63
 },
 {
   "pre_formatted": "When Bill Clinton went through in '92, he was a young candidate. He spoke very clearly to the heart of a lot of issues of benefit to college students, college loans, umm, I mean, he was, he was a very, very -- he was a candidate that a lot of college students could look up to, and, umm, there's just nothing like that. You've got three guys who all worked in the Nixon White House, which, you know, most of the kids in college these days weren't @ @ @ @ @ @ @ @ @ @ Umm, and you got Steve Forbes, who's a millionaire. I'm pretty sure almost ",
   "match": "everyone I know doesn't relate to him very well",
   "post_formatted": ", so -- \n@!MS-WARNER: But, Jeanette, you said your campus is very Republican at BYU. ",
   "surface": "no one (that I know) relates to him very well",
   "inverse": "not all (that I know) relate to him very well",
   "uniqueID": 64
 },
 {
   "pre_formatted": "Did he seem like @ @ @ @ @ @ @ @ @ @, yeah. But I just thought that I was so, so, so, so in love with him and I thought he was the one. \n@!Mr-MARTIN: I was just in a cloud when I first met her. \n@(Photo-of-Teshika) \n@!Ms-BURNSIDE: ",
   "match": "Everything doesn't happen the way you want it to all the time",
   "post_formatted": ". \n@(Footage-of-Teshika) \n@!MORIARTY: @(Voiceover) Like so many teen-agers, Teshika fell out of love as fast as she fell in. ",
   "surface": "nothing happens the way you want it to all the time",
   "inverse": "not all things happen the way you want them to all the time",
   "uniqueID": 65
 },
 {
   "pre_formatted": "CHRIS WALLACE: Is it possible, and I say this with affection, is it possible that you do need help? \nDENNIS RODMAN: No, I mean, people have emotional problems, but that's just -- that's part of life. That is a part of life. ",
   "match": "Everyone that have problems don't need to go to a damn doctor",
   "post_formatted": ". It's just part of life, and experience what's going on. ",
   "surface": "no one (that has problems) needs to go to a damn doctor",
   "inverse": "not all (that have problems) need to go to a damn doctor",
   "uniqueID": 66
 },
 {
   "pre_formatted": "So there -- there were all of those problems at the beginning of coming together. And she would call me this and I would say that. We had many, many arguments. The fact is that marriages like mine are not always -- ",
   "match": "everything isn't the greatest",
   "post_formatted": ". You have your arguments, but we're able to get by that. ",
   "surface": "nothing is the greatest",
   "inverse": "not all things are the greatest",
   "uniqueID": 67
 },
 {
   "pre_formatted": " @!Mr-CHIP-ROWE-@1Pla: Oh, that's a tough one. I don't know. I mean ... \nMcEWEN: What's the male equivalent of that word, intimacy, then? \n@!Mr-ROWE: ",
   "match": "Every sexual encounter doesn't have to have candlelight",
   "post_formatted": ", you know -- and these are stereotypes -- but all -- the -- the process doesn't have to be a -- every sexual encounter, @ @ @ @ @ @ @ @ @ @ \n@!Mr-ROWE: So ... \nMcEWEN: ... i -- isn't it changing for women? ",
   "surface": "none have to have candlelight",
   "inverse": "not all have to have candlelight",
   "uniqueID": 68
 },
 {
   "pre_formatted": " @!KING: Among, among the greats. \n@!IMUS: Yeah. Not a dope, either. I mean, ",
   "match": "everybody doesn't know what a dummy he was",
   "post_formatted": ". He's not a dummy at all. ",
   "surface": "nobody knows what a dummy he was",
   "inverse": "not all know what a dummy he was",
   "uniqueID": 69
 },
 {
   "pre_formatted": "Wouldn't it have benefited you to go on a show like this and say or anything and say, hey, I was friends with both of them. I wasn't romantically involved. Why didn't you come forward? \n@!ALLEN: I feel like ",
   "match": "every question doesn't deserve an answer",
   "post_formatted": " and you don't have to justify things that are just as absurd as some of the things going around. \n@!KING: Finally, on that matter, why didn't you go to the funeral? ",
   "surface": "none deserve an answer",
   "inverse": "not all deserve an answer",
   "uniqueID": 70
 },
 {
   "pre_formatted": " @!STEVEN-JAY-GOULD: Indeed. I think that's why the transfer got made to counting periods of a thousand years because Jesus says in the three synoptic gospels quite explicitly that this end is going to come soon, the second coming, the millennium. He says there are some of you who will still be alive -- some of you standing here today will still be alive when the Son @ @ @ @ @ @ @ @ @ @ didn't happen. So when you're faced with that situation -- which by the way is the only constant feature of the history of apocalypse -- is ",
   "match": "every predicted date for Armageddon hasn't come to pass",
   "post_formatted": ", and people have to come down off their mountaintops in disappointment and that's exactly what's happened. In fact, the first major Christian apocalyptic movement known as the Modenists, was I think in about 150 AD, so this is very early in the history.",
   "surface": "none have come to pass",
   "inverse": "not all have come to pass",
   "uniqueID": 71
 },
 {
   "pre_formatted": "TED KOPPEL: Joining me is historian Stanley Kutler, the author of Abuse of Power. He transcribed more than 200 hours of the Nixon Watergate tapes and I have to wonder, let's say particularly younger people, if they read your book, they read it all, what are they going @ @ @ @ @ @ @ @ @ @ that you're left with? \nSTANLEY KUTLER, Author \"Abuse of Power\": Well, among younger people I fear that a lot of them will just say well, everybody does it, which, of course, is the standard Nixon defense, that everybody does it. Well the long answer to that is that ",
   "match": "everybody doesn't do it",
   "post_formatted": " and the short answer is it's somewhat beside the point. But I think that the very raising of the question may point us to what is the real, ultimate legacy of Watergate is in that it fostered this attitude of cynicism, this distrust of leaders, this skepticism toward them. ",
   "surface": "nobody does it",
   "inverse": "not all do it",
   "uniqueID": 72
 },
 {
   "pre_formatted": "But, they pay you as well. And, it's just great. I'm telling you. I don't understand why ",
   "match": "everybody doesn't want to do it",
   "post_formatted": ". \nLAUGHTER \nHANSEN: OK, so you didn't see The Day of @ @ @ @ @ @ @ @ @ @. ",
   "surface": "nobody wants to do it",
   "inverse": "not all want to do it",
   "uniqueID": 73
 },
 {
   "pre_formatted": "I just have a quick comment in regards to the relation between air crew and grounds controllers. I was involved in naval aviation for several years, and the motto that we lived by in the cockpit was assume everyone is out to kill you. Which is not to say the FAA crew are not good at what they do, it's just @ @ @ @ @ @ @ @ @ @ salt, kind of. I'm sure that the people on the ground -- the -- if they -- they might not phrase it this way, but they probably should assume that ",
   "match": "everybody in the air doesn't know what they're doing either",
   "post_formatted": ". It's just to say that, you know, there's -- there's a lot that can go wrong and just to have only one set of eyes or one brain working on the problem frequently is not enough. ",
   "surface": "nobody (in the air) knows what they're doing either",
   "inverse": "not all (in the air) know what they're doing either",
   "uniqueID": 74
 },
 {
   "pre_formatted": "How did he do it? How did he get this Republican-led Congress to agree and work and, you know, allow him to make this speech that, again, @ @ @ @ @ @ @ @ @ @ \nRODHAM CLINTON: Well, I think it's a dream come true for America. And the reason is because, when he took office, he determined to put our fiscal house in order. I mean, we couldn't be sitting here talking about saving Social Security or lowering class size or having a child care program if the President hadn't made the hard choices in 1993, and if ",
   "match": "every Democrat hadn't put their political lives on the line to vote for the deficit reduction plan",
   "post_formatted": ". Remember, that passed without a single Republican vote. ",
   "surface": "none had put their political lives on the line to vote for the deficit reduction plan",
   "inverse": "not all had put their political lives on the line to vote for the deficit reduction plan",
   "uniqueID": 75
 },
 {
   "pre_formatted": "Just one week ago, Education Secretary Richard Reilly reported that 90 percent of America's schools like Jonesboro were free from violence. Now Jonesboro has become the sixth time students have fired on fellow students and teachers in the last two and a half years. And Congress is already talking about new laws to prevent another one. \n@(BEGIN-VIDEO-CLIP) \n@!SEN-DICK-DURBIN-@: There is no reason why ",
   "match": "every child in America shouldn't be protected at least in some small way",
   "post_formatted": " by assuming that every owner of a gun has to own it responsibly, keep it in a safe manner, keep it in a way where it can not be accessed by children. \n@(END-VIDEO-CLIP) \n@!PRESS: Is it that simple? ",
   "surface": "none (in America) should be protected at least in some small way",
   "inverse": "not all (in America) should be protected at least in some small way",
   "uniqueID": 76
 },
 {
   "pre_formatted": "You know, he said clearly: \"I did something very wrong. I regret it. I'm solely responsible for it. I want to get beyond it,\" but apparently ",
   "match": "everybody didn't hear that as clear as I did",
   "post_formatted": ", and I would like to have that said again so we can get it behind us. \n@!KING: So, in other words, he might be in Moscow, take a question when he's standing there with the Russian leadership and just answer it then? ",
   "surface": "nobody heard that as clear as I did",
   "inverse": "not all heard that as clear as I did",
   "uniqueID": 77
 },
 {
   "pre_formatted": " @!FRATANGELO: How do you remember it? What happened? \n@!Ms-IVANOV: We were so concerned to get in, and everybody's so nervous because train wouldn't stay. ",
   "match": "Everything wasn't working like",
   "post_formatted": " @ @ @ @ @ @ @ @ @ @, I start screaming. \n@!FRATANGELO: Because Boris was on it? ",
   "surface": "nothing was working like",
   "inverse": "not all things were working like",
   "uniqueID": 78
 },
 {
   "pre_formatted": "And for a remote jungle outpost, it was impressive. There was a nursery for the 33 babies born there recently. There were well-constructed dormitories, activities for children, even a dance workshop. But since correspondent Don Harris was handed the secret note the night before, Congressman Leo Ryan and his entourage now knew ",
   "match": "everything wasn't as it seemed",
   "post_formatted": ". As Don Harris waited to confront Jim Jones with the note, he interviewed several families. ",
   "surface": "nothing was as it seemed",
   "inverse": "not all things were as they seemed",
   "uniqueID": 79
 },
 {
   "pre_formatted": " @ @ @ @ @ @ @ @ @ @ the problem for the president, it seems to Democratic National Committee money on what we know were in effect Bill Clinton ads ... \n@!LIASSON: Right. \n@!HUME: ... which is not permitted under the law, that Bill Clinton was involved in that to the point of vetting, helping write up to his eyeballs in that project. There's a good chance that Dole may go before the committee and say, look, I don't know what was done by others, but I didn't have anything to do with that -- that was done apart from me; yes, I knew about it; I didn't edit; I didn't write; I didn't help place; I wasn't involved in that -- which would strike a contrast between him and the president on that issue and defeat one of the important arguments the Democrats have made after every revelation about the Clinton campaign, which was everybody does it. If ",
   "match": "everybody doesn't do it",
   "post_formatted": ", and the contrast is between Clinton and Dole, @ @ @ @ @ @ @ @ @ @. ",
   "surface": "nobody does it",
   "inverse": "not all do it",
   "uniqueID": 80
 },
 {
   "pre_formatted": "NOCAHARA READING FROM MEMOIRS OF FUCHIDA: Nearly 50 zeros have gone to intercept the unprotected enemy formation. Small wonder it did not get through \n@!GAYE The point is that when I get to where I should be, I remember looking at the Kaga and thinking, \"My goodness that's a big -- whooo, boy\" -- don't I wish the Hornet looked that big when I was trying to land on her. But I went straight on in and I saw somebody up on @ @ @ @ @ @ @ @ @ @ an admiral or something, waving a pair of binoculars and pointing a samurai sword at me like ",
   "match": "everybody didn't know where I was",
   "post_formatted": ". So, I ignored him and I looked down at the fantail and I saw all these airplanes. ",
   "surface": "nobody knew where I was",
   "inverse": "not all knew where I was",
   "uniqueID": 81
 },
 {
   "pre_formatted": " @!KURALT: @(Voiceover) Why didn't they all quit? What kept them pulling on their coveralls and packing their lunch buckets and climbing up there into the fog every day? \n@!Mr-ZAMPA: I don't know. I -- I guess men will do things that some guys -- ",
   "match": "everybody couldn't do",
   "post_formatted": ". I thought -- it was a thrill. ",
   "surface": "nobody could do",
   "inverse": "not all could do",
   "uniqueID": 82
 },
 {
   "pre_formatted": " @!RIVERA: ... seeing it? \n@!Ms-MILLER: I ... \n@!Dr-WEINSTOCK: OK, that -- that -- that's not the only -- the point. I -- I ... \n@!RIVERA: But isn't that like saying that you have guns out there ... \n@!Dr-WEINSTOCK: I ... \n@!RIVERA: ... and most @ @ @ @ @ @ @ @ @ @ \n@!Dr-WEINSTOCK: Yes, but I -- I think -- you know, when you ask a question, How come ",
   "match": "everybody doesn't do it",
   "post_formatted": ", and -- and how -- how can they be effective when only a certain portion, a segment of the population does it? Well, one answer is -- you know how effective aspirin -- what -- how effective is aspirin? ",
   "surface": "nobody does it",
   "inverse": "not all do it",
   "uniqueID": 83
 },
 {
   "pre_formatted": "Everyone gets to see them, and that's really not true of art-galleries. It's such a small percentage of the population make their way into an art gallery. And I think that's what's fabulous about it. I can't believe ",
   "match": "everybody doesn't want to be a window dresser",
   "post_formatted": ". You get to do stuff, and everyone looks at it, and oohs and ahs, or tells you how horrible they think it is.",
   "surface": "nobody wants to be a window dresser",
   "inverse": "not all want to be a window dresser",
   "uniqueID": 84
 },
 {
   "pre_formatted": " @!SUAREZ But, I do have to say, as @ @ @ @ @ @ @ @ @ @ different kinds of people, and when I look at the vocational programs where I went to school, they weren't strictly the province of minority people. There was an understanding that all kinds of people were going to end up getting skilled trades jobs, and let's also talk about who lives where in the country, I mean there are ... \nCALLER: Exactly \n@!SUAREZ ... there are vast places where there just aren't a lot of minority kids and those vo-tech classes are not just filled with black and Latino kids ... \nCALLER: Oh, I mean, I think no question, but in suburban New Jersey, where your guest had been from I would -- I mean it would shock me to no end if ",
   "match": "everyone of vocational classes wasn't majority Black and Latino",
   "post_formatted": ". Because, I mean, I think that's what happens all too easily that -- I mean and what I say when I speak to kids, and luckily I do get to do so on a fairly regular basis is don't @ @ @ @ @ @ @ @ @ @ you not to get one ... ",
   "surface": "no one (of vocational classes) was majority Black and Latino",
   "inverse": "not all (of vocational classes) were majority Black and Latino",
   "uniqueID": 85
 },
 {
   "pre_formatted": " @!Ms-RUIZ: \"Why must we all die so very much alone? Or isn't it just the sorrow of this singular heart, drifting home, our death?\" I guess I'm a writer, huh? Because maybe ",
   "match": "everybody can't do it",
   "post_formatted": ". OK, well, I didn't know that. ",
   "surface": "nobody can do it",
   "inverse": "not all can do it",
   "uniqueID": 86
 },
 {
   "pre_formatted": "I feel sorry for them. \nBARBARA WALTERS: You feel sorry for them. \nLANCE KIRKLIN: Because they had that much anger, that much hate bottled up inside of them, they had to act out this way. \nSEAN GRAVES: I feel - not sorry towards them, but sorry that ",
   "match": "everyone around them didn't notice any changes",
   "post_formatted": ". And if I were to start to come home wearing a trench coat or learning to make pipe bombs, I'd be grounded for life, in therapy every day. ",
   "surface": "no one (around them) noticed any changes",
   "inverse": "not all (around them) noticed any changes",
   "uniqueID": 87
 },
 {
   "pre_formatted": "We have the choice to modify our genes and perhaps even alter eventually human nature itself. What choices we will make does not depend on the knowledge so much as on our ethics, how we perceive ourselves as a species and what our goals are. \nMADELEINE L'ENGLE, Author, \"A Wrinkle in Time\": Whenever we make a new scientific discovery about our planet or our universe, what we think has to change along with it. And it was a terrible shock to have to admit that ",
   "match": "everything doesn't surround us, you know, round and round us",
   "post_formatted": ", we're not the center, we're peripheral. ",
   "surface": "nothing surrounds us, you know, round and round us",
   "inverse": "not all things surround us, you know, round and round us",
   "uniqueID": 88
 },
 {
   "pre_formatted": " @!J-LEWIS: Right. \n@!KING: How does that affect you? Frank said, supposed to have said near the end of his life, \"everybody's gone.\" \n@!J-LEWIS: Yes, but ",
   "match": "everyone isn't gone for me",
   "post_formatted": ". I have Sam and I've got Danny, and I wake up every morning. ",
   "surface": "no one is gone for me",
   "inverse": "not all are gone for me",
   "uniqueID": 89
 },
 {
   "pre_formatted": " @!TUSH: While searching for a father he never knew, Johnson falls upon a gypsy fortune-teller, who reveals that Johnson's father was a simple farmer named Kieran O'Dea, played in flashback by Aidan Quinn. \n@(BEGIN-VIDEO-CLIP-) \n@!UNIDENTIFIED-ACTRE: I wasn't asking you to dance, but I could teach you, if you like. \n@(END-VIDEO-CLIP) \n@!TUSH: When O'Dea is asked to dance by the young daughter of a wealthy landowner, a scandal ensues because of the differences in age and class. \n@!AIDAN-QUINN-ACTOR: It's a kind of a star-crossed \"Romeo and Juliet\" -type love story, where these two were desperately in love with each other, but ",
   "match": "everyone around them doesn't want them to be together",
   "post_formatted": ". \n@!TUSH: For Aidan Quinn, the son of Irish immigrants, \"This Is My Father\" was a labor of love that was also a Quinn family affair. ",
   "surface": "no one (around them) wants them to be together",
   "inverse": "not all (around them) want them to be together",
   "uniqueID": 90
 },
 {
   "pre_formatted": "And this was the second piece of what officials called aggressive Russian spying in six months, this recent incident. So you have to wonder what's going on here with Russian intelligence gathering. \n@!DRUDGE: And per usual with most of your stories, they get very little pickup in the main press, and I don't understand why. You would think a Russian spy being caught at the UN would be big, bold headline new, and ",
   "match": "every paper in this country just doesn't seem to be",
   "post_formatted": ". Let's take a quick break and take a breather here. ",
   "surface": "none (in this country) seem to be",
   "inverse": "not all (in this country) seem to be",
   "uniqueID": 91
 },
 {
   "pre_formatted": " @!SAMUELS: Well, I think that's wonderful. That's what college is for, to teach you how to snub the president of the United States if you disagree with him. And you notice he doesn't seem upset. He knows ",
   "match": "everybody doesn't love him",
   "post_formatted": ". \n@!DRUDGE: You're right. ",
   "surface": "nobody loves him",
   "inverse": "not all love him",
   "uniqueID": 92
 },
 {
   "pre_formatted": "Unidentified Woman 1: What a gorgeous profile. \nUnidentified Woman 2: Isn't that nice? \nUnidentified Woman 3: Especially right here in the eyes. And, like, this line right here, that's not -- ",
   "match": "everyone doesn't have that line right there",
   "post_formatted": ". So these eyes are beautiful right in here. ",
   "surface": "no one has that line right there",
   "inverse": "not all have that line right there",
   "uniqueID": 93
 },
 {
   "pre_formatted": "O'REILLY: No, I'm not. I'm ... \n@!WHITE: You can't compare it with race. \nO'REILLY: I'm comparing it with human beings. \n@!WHITE: You say that ",
   "match": "everybody don't believe that",
   "post_formatted": ". Well, I've got over a hundred thousand letters. ",
   "surface": "nobody believes that",
   "inverse": "not all believe that",
   "uniqueID": 94
 },
 {
   "pre_formatted": "The reason she cut this out and the only reason is because it was religious and that's not right. \n@!Rev-LYNN: There is no evidence in this case, Katie, whatsoever that this teacher had any animosity toward Christians ... \n@!Mr-HASSON: There isn't, Barry. \n@!Rev-LYNN: @ @ @ @ @ @ @ @ @ @ good teacher just trying to do the right thing -- make intelligent, reasonable judgement so that ",
   "match": "everybody in that captive audience of the school wasn't compelled to listen to a religious message",
   "post_formatted": ". That's very reasonable. ",
   "surface": "nobody (in that captive audience of the school) was compelled to listen to a religious message",
   "inverse": "not all (in that captive audience of the school) were compelled to listen to a religious message",
   "uniqueID": 95
 },
 {
   "pre_formatted": "At least sometimes. I'm talking about the 1930's and 40's. They called it \"The Golden Age of Radio.\" Okay, ",
   "match": "every show wasn't captivating",
   "post_formatted": ", some of the acting sounded forced, some of the jokes were lame, and some shows featured ethnic stereotypes. ",
   "surface": "none were captivating",
   "inverse": "not all were captivating",
   "uniqueID": 96
 },
 {
   "pre_formatted": "So I guess if we survive the year 2000, we've got the year 2012 right around the corner. \n@!ZWERDLING: Wow. This is so exhausting. I mean, too bad ",
   "match": "everybody around the world can't just agree on one common calendar and how to make it work",
   "post_formatted": ". I mean -- by the way, how much of the world uses the calendar that we use here in the United States? ",
   "surface": "nobody (around the world) can just agree on one common calendar and how to make it work",
   "inverse": "not all (around the world) can just agree on one common calendar and how to make it work",
   "uniqueID": 97
 },
 {
   "pre_formatted": "And somehow, this place with all this activity, all this excitement, all this show business, as well, just seemed to me a place I wanted to inhabit. I also, as a kid, had tremendous problems with insomnia. And I loved the idea of New York as a place unlike Washington, where they didn't roll up the sidewalks at night and where there was lights, there was action and, of course, there was theater. \n@!GROSS: Was that comforting in a way, that, you know, ",
   "match": "everything wasn't expected to be calm and quiet",
   "post_formatted": " and @ @ @ @ @ @ @ @ @ @ There were other people who were awake or probably other people who couldn't sleep. ",
   "surface": "nothing was expected to be calm and quiet",
   "inverse": "not all things were expected to be calm and quiet",
   "uniqueID": 98
 },
 {
   "pre_formatted": "And as they prepare to open a new brewery, Yuengling has one thing going for it that very few American businesses of any type have: continuous family ownership. Jennifer Yuengling and her sisters, if they take over the business, will be the sixth generation of the Yuengling family to run the brewery. Dick Yuengling say that's important to him. \n@!Mr-YUENGLING: ",
   "match": "Everything isn't driven by the almighty dollar with this company",
   "post_formatted": ". It's longevity is -- I keep score by longevity, not necessarily by @ @ @ @ @ @ @ @ @ @ keep this thing going and my kids can take it into their generation, that's what I'm here for. ",
   "surface": "nothing is driven by the almighty dollar with this company",
   "inverse": "not all things are driven by the almighty dollar with this company",
   "uniqueID": 99
 },
 {
   "pre_formatted": "You know, like, he'll have an incredible earning capacity for the rest of his life and have a better life if he takes full advantage of his educational opportunities right now. And certainly, those are things you discuss with every young man. I mean, sometimes family situations dictate that they feel the need, you know, to go early just to help their families. ",
   "match": "Everyone doesn't come from, you know, the best background",
   "post_formatted": ", so that has to be taken to account. ",
   "surface": "no one comes from, you know, the best background",
   "inverse": "not all come from, you know, the best background",
   "uniqueID": 100
 },
 {
   "pre_formatted": "Right. \n@!Mr-KRZYZEWSKI: The NCAA makes $555 million a year on the NCAA basketball tournament, and that funds somewhere between 85 and 90 percent of everything that the NCAA does. When you're making that type of money, there's a tendency to look and say, Well, everything must be OK. But ",
   "match": "everything isn't OK",
   "post_formatted": ". \n@!WILLIAMS: But, Coach, if influential people like you want reform, why isn't it happening? ",
   "surface": "nothing is OK",
   "inverse": "not all things are OK",
   "uniqueID": 101
 },
 {
   "pre_formatted": "That's who the public sees. On the other hand, when police chief Dale Harper meets Cora Felton and asks for help with the clue that he gets, he finds out that she drinks, she smokes, she gambles. The first time that he meets her, she is so hungover that her niece is desperately trying to prop her up and it's practically a marionette act. And that's the Cora Felton that ",
   "match": "everyone doesn't see",
   "post_formatted": " and that her niece is desperately trying to keep the public from seeing. ",
   "surface": "no one sees",
   "inverse": "not all see",
   "uniqueID": 102
 },
 {
   "pre_formatted": "We really are even pretty stringent. We don't even go for like a glass of wine or anything. The longer and the harder the tour, the more stringent we try to be and just to take care of ourselves physically and mentally. Being on the road can be physically hard and also mentally hard too if ",
   "match": "everyone doesn't have the right frame of mind",
   "post_formatted": ". \n@!HANSEN: Mm. ",
   "surface": "no one has the right frame of mind",
   "inverse": "not all have the right frame of mind",
   "uniqueID": 103
 },
 {
   "pre_formatted": "What's going on here? \nJACKSON: The done deal is the problem. The Democratic Party needs to be democratic far more so than it has been. Coming out of Florida, where every vote counts, where we now have learned a lesson, we can not be a part of an apparatus where ",
   "match": "every vote doesn't count",
   "post_formatted": ". I believe that it's important that the system and the process be open. ",
   "surface": "none count",
   "inverse": "not all count",
   "uniqueID": 104
 },
 {
   "pre_formatted": "Juan Gonzalez publicly remains adamant about refusing to come to Florida. \nIRA KURZBAN, IMMIGRATION ATTORNEY: Why should we assume that the father's feelings are not genuine? Simply because he lives in Cuba? Are we really saying that ",
   "match": "everyone who lives in Cuba doesn't agree with the political system there",
   "post_formatted": " and is under the thumb personally of Fidel Castro. I think that's kind of a silly position to take. ",
   "surface": "no one (who lives in Cuba) agrees with the political system there",
   "inverse": "not all (who live in Cuba) agree with the political system there",
   "uniqueID": 105
 },
 {
   "pre_formatted": "It's rare that the show does a two-parter. So you don't have to worry about what you have to wait for next week \n@!KING But sometimes, Steven, it leaves you unresolved, right? I mean, ",
   "match": "everything doesn't always tie together",
   "post_formatted": ", as life doesn't always tie together \n@!HILL Yes ",
   "surface": "nothing always ties together",
   "inverse": "not all things always tie together",
   "uniqueID": 106
 },
 {
   "pre_formatted": " @!KURTZ And the fact is, Roger Simon, that the crisis atmosphere exists mainly in newsrooms and on television reports. I don't sense, other than these isolated demonstrations in Broward and Miami, that people are up in arms about this. They're interested \n@!SIMON Yeah, this is the biggest disconnect between the media and the real world since the Monica Lewinsky story when the media was frantic -- the media were frantic, and they wanted to know why ",
   "match": "everyone else wasn't frantic",
   "post_formatted": ". The people are treating this the same way. ",
   "surface": "no one else was frantic",
   "inverse": "not all else was frantic",
   "uniqueID": 107
 },
 {
   "pre_formatted": "Why do we need to call the election within hours? As long as all the networks and all the media agree that you're going to wait to have all the ballots counted, including the absentee ballots, that seems fair to the country. It seems like ... \nKURTZ: Because -- I asked that to ... \nMCDANIEL: ... a good idea for them to ... \nKURTZ: I asked that to Sam Donaldson. He said, \"Well, we at ABC would be happy to wait, but of course, ",
   "match": "everybody else won't wait",
   "post_formatted": ".\" \nMCDANIEL: Right \n@!KURTZ So you have this sort of pack journalism instinct, Michael ",
   "surface": "nobody else will wait",
   "inverse": "not all else will wait",
   "uniqueID": 108
 },
 {
   "pre_formatted": "Now, you'll notice in the intro I left that word rhetoric in there on purpose and it's because I'm referring to your chapter on vocabulary and you mention the impact of just one word, whether it's a politician or a journalist, and why use rhetoric? Why not use dialogue? \nHESS: Well, I think, by the way @ @ @ @ @ @ @ @ @ @ a candidate to deconstruct the position papers or the policies of his opponent. ",
   "match": "Everything shouldn't be about how wonderful they are",
   "post_formatted": ". We want to know what they think about how awful the other side is. ",
   "surface": "nothing should be about how wonderful they are",
   "inverse": "not all things should be about how wonderful they are",
   "uniqueID": 109
 },
 {
   "pre_formatted": "He's been calling himself a moderate, they have @ @ @ @ @ @ @ @ @ @ know, he says he plays well with others and he does everything in the spirit of bipartisanship, and I think they need to say, well, this is a guy that's on the right side of a lot of these fights, but he's only willing to stand up to a certain extent and he's the guy that caves on tough votes, and they're not doing that yet \n@!MESERVE But isn't there a risk if she does that, that it will be seen as an attack and that it will reinforce certain perceptions that New York voters already have about the first lady? \nBENSON: Well, I think you have to make the distinctions. There seems to be -- unless ",
   "match": "every reporter in New York hasn't been doing their job",
   "post_formatted": " -- there seems to be very little to attack him with on a personal basis. But I don't think anyone thinks it is out of bounds to attack the record. ",
   "surface": "none (in New York) have been doing their job",
   "inverse": "not all (in New York) have been doing their job",
   "uniqueID": 110
 },
 {
   "pre_formatted": " @!BUSH: If we can't reach agreement, we're going to implement. It's the right thing to do. \n@!ANGLE: Prime Minister Berlusconi praised Bush for trying to reach a deal with Putin. Then Berlusconi said what everyone knows but ",
   "match": "[what everyone] won't say",
   "post_formatted": ", that Russia has to be handled with kid gloves because of what he called the \"psychological factor.\" \n@!SILVIO-BERLUSCONI: They were a world power. ",
   "surface": "what no one will say",
   "inverse": "what not all will say",
   "uniqueID": 111
 },
 {
   "pre_formatted": "McNAMARA: @(Voiceover) It was the kids in Eskridge that inspired Maisie's drive for a pool. \n@!Ms-DeVORE: This is all they've got is a ball program. That's the only thing they've got for kids. And ",
   "match": "every kid isn't ball-minded",
   "post_formatted": "; they don't want to play ball. But there's not very many that don't like to swim. ",
   "surface": "none are ball-minded",
   "inverse": "not all are ball-minded",
   "uniqueID": 112
 },
 {
   "pre_formatted": " @!TEICHNER: @(Voiceover) So in Ft. Worth, Vicki Brady is flying to Phoenix this month for her granddaughter's birthday, even though her husband Bruce is still job hunting. \n@!Mr-BRADY: So we're spending the money for the airline @ @ @ @ @ @ @ @ @ @ of the budget. And I agree, I mean, we've got to infuse into the economy. ",
   "match": "Everybody can't just sit back",
   "post_formatted": ". \n@(Footage-of-Perot) \n@!TEICHNER: @(Voiceover) And not everybody is worried. ",
   "surface": "nobody can just sit back",
   "inverse": "not all can just sit back",
   "uniqueID": 113
 },
 {
   "pre_formatted": " @!Mr-COLFER: Moisturized. \n@!SAWYER: Moisturized. \n@!Mr-COLFER: Moisturized, or they get -- or they get flakey. Everybody knows that, I think, but ... \n@!SAWYER: Right. And ",
   "match": "everybody out there doesn't know the characters",
   "post_formatted": ". \n@!Mr-COLFER: Yeah. ",
   "surface": "nobody (out there) knows the characters",
   "inverse": "not all (out there) know the characters",
   "uniqueID": 114
 },
 {
   "pre_formatted": "Aren't the differences between these two men really more striking than @ @ @ @ @ @ @ @ @ @ I think that, you know, the jury is still out on that. I see in young George Bush some of the firmness and conviction of ideas that Reagan had. And I also see some of that undervalue, that underestimation that was a great Reagan virtue. ",
   "match": "Everybody didn't think that he was up to it",
   "post_formatted": "\n@!HUNT He always benefited from that, didn't he? ",
   "surface": "nobody thought that he was up to it",
   "inverse": "not all thought that he was up to it",
   "uniqueID": 115
 },
 {
   "pre_formatted": "KING: We're back with Laura Bush. OK, you like having the forum? \nBUSH: That's right \n@!KING What don't you like? ",
   "match": "Everything can't be perfect",
   "post_formatted": "\n@!BUSH Well, actually, it's very nice \n@!KING There's nothing you don't like? ",
   "surface": "nothing can be perfect",
   "inverse": "not all things can be perfect",
   "uniqueID": 116
 },
 {
   "pre_formatted": " @!SNOW: All right. Is there any significant difference between the Saudi government and the Saudi royal family? \n@!THOMPSON: Well, it depends on who you're talking about in the family, I suppose. But, you know, there are many, many of them, and they can't be expected -- ",
   "match": "everybody can't be expected to know what everybody else is doing",
   "post_formatted": ". But over a period of time, you get a pattern. ",
   "surface": "nobody can be expected to know what everybody else is doing",
   "inverse": "not all can be expected to know what everybody else is doing",
   "uniqueID": 117
 },
 {
   "pre_formatted": " @!SHORTZ: It was so well-written by Burkhard Bilger, and he takes a clear-eyed view of crossword puzzles, and Henry Hook in particular, this grand master of crosswords. \n@!HANSEN: I love it. It's the idea that puzzles are so much like life. You start out with small questions. You start getting answers, but unlike life, ",
   "match": "everything doesn't have a solution",
   "post_formatted": ". \n@!SHORTZ: Right. ",
   "surface": "nothing has a solution",
   "inverse": "not all things have a solution",
   "uniqueID": 118
 },
 {
   "pre_formatted": "MCCAIN: My company officer would have predicted that I would be on probation rather than in the United States Senate, I can assure you. \n( CROSSTALK ) \nMCCAIN: But when I say, when you are a loner, that's OK, as long as you're standing up for what you're believing in, and you have a cause. If you're just a loner, then, as I say, you're just a punk, as I said earlier. But if you stand up for what you believe in, even if ",
   "match": "everybody else doesn't agree with you",
   "post_formatted": ", then you're doing the right thing. And you mentioned, there is a lot of my colleagues who do not like me. ",
   "surface": "nobody else agrees with you",
   "inverse": "not all else agree with you",
   "uniqueID": 119
 },
 {
   "pre_formatted": "R. CIMAROLI: And she had a million dollar smile and then when whoever talks to you about her that's what they would talk about, that smile, and she had a great little laugh, and she used to -- when she laughed, she did a high pitch sound @ @ @ @ @ @ @ @ @ @ nose and she'd laugh. \nA. CIMAROLI: But you just turn around and she's not there. You look for her and she's just not there. It's very difficult and ",
   "match": "everyone in the family they just don't know what to say",
   "post_formatted": ". And so, sometimes it's a silence and we all just feel the same thing. ",
   "surface": "no one (in the family) knows what to say",
   "inverse": "not all (in the family) know what to say",
   "uniqueID": 120
 },
 {
   "pre_formatted": "Also, the generals are talking with our generals. This is a police state. It's a command, not only ( UNINTELLIGIBLE ), but military. If you take out the head, ",
   "match": "everything else doesn't know what to do",
   "post_formatted": ". \n@!RUMSFELD: That would be a happy prospect. ",
   "surface": "nothing else knows what to do",
   "inverse": "not all things else know what to do",
   "uniqueID": 121
 },
 {
   "pre_formatted": "And I said, 'Damn, he did it.' \n@!SHRIVER: You said. \n@!Ms-GOWRAN @ @ @ @ @ @ @ @ @ @ \n@!SHRIVER: Why did you know right away that, as you say, he did it, meaning Robert Blake. \n@!Ms-GOWRAN: Because it's the way that everything sounded funny, ",
   "match": "everything wasn't right when we talked",
   "post_formatted": ". But my mom didn't have the heart to tell me something was wrong. ",
   "surface": "nothing was right when we talked",
   "inverse": "not all things were right when we talked",
   "uniqueID": 122
 },
 {
   "pre_formatted": " @!RACHEL-MOYER-# I never thought for one instant that going up to that school 23 miles away from here would be the end of his life. \ngraphics: Film Clip: TV game coverage \n@!DOCTOR-TIM-JOHNSON# @(Voice-Over) Greg played for 10 minutes before walking off the court at half time. \n@!JOHN-MOYER-LOST-S# I made eye contact with him and waved and he gave me the, the Greg smile and we knew everything was okay. \n@!DOCTOR-TIM-JOHNSON# @(Voice-Over) But ",
   "match": "everything wasn't okay",
   "post_formatted": ". Within moments, another player frantically sent for Greg's parents. ",
   "surface": "nothing was okay",
   "inverse": "not all things were okay",
   "uniqueID": 123
 },
 {
   "pre_formatted": "It's like -- you know, it reminds me of the civil rights movement years ago when, you know, you have laws that say that minorities have to be allowed in certain places, but it certainly didn't change people's hearts for a very long time, and some people's hearts still may not be changed. So you're in a situation where one out of five of the men surveyed there have @ @ @ @ @ @ @ @ @ @ do they not want you there. I read some of the comments from those surveys where they say they think you're worthless. \n@!SHARON: And they -- ",
   "match": "every single person that is attending the Academy now wasn't born -- I mean, has not lived at a time where there weren't women at the Academy",
   "post_formatted": ". \n@!WINFREY: That's right. ",
   "surface": "none (that are attending the Academy now) have lived at a time where there weren't women at the Academy",
   "inverse": "not all (that are attending the Academy now) have lived at a time where there weren't women at the Academy",
   "uniqueID": 124
 },
 {
   "pre_formatted": " @!WERTHEIMER: So what about New Jersey? Can New Jersey get over the hump? \n@!RAPOPORT: Well, @ @ @ @ @ @ @ @ @ @ first team from the Eastern Division to return to the finals since the Bulls were winning all their championships. They're a little nervous about that in New Jersey, Linda, that ",
   "match": "every team that made it to the finals from the East in the last couple of years hasn't been able to repeat",
   "post_formatted": "; but again, they're strong competition. The Pistons have been impressive this year. ",
   "surface": "none (that made it to the finals from the East in the last couple of years) have been able to repeat",
   "inverse": "not all (that made it to the finals from the East in the last couple of years) have been able to repeat",
   "uniqueID": 125
 },
 {
   "pre_formatted": "What else might work with that kind of a concept? \n@!Prof-NALEBUFF: You know, I thought about baby strollers the same way, where people who are traveling in other cities, it's really a pain to actually take your stroller with you. \n@!Prof-AYRES: And the same kind of a Flexcar idea has been used with combines by farmers, the flex combine. ",
   "match": "Every farmer doesn't need a combine",
   "post_formatted": ". As a matter of fact, on some crops, it's very predictable that they're going to ripen from north to south, and so you just set up with your southerly neighboring farms to take over the combine the next time. ",
   "surface": "none need a combine",
   "inverse": "not all need a combine",
   "uniqueID": 126
 },
 {
   "pre_formatted": " @!Mr-ABELL: Well, these we get from @ @ @ @ @ @ @ @ @ @ very fine designer things. Let's see some of the labels we have -- we have Chanel, Christian Dior -- that'll actually do pretty well. I mean, we'll probably get $5 or $6 for this nickel's worth of plastic. Manolo Blahnik shoe covers -- you know, ",
   "match": "everybody can't [afford] a pair of $600 Manolo Blahniks",
   "post_formatted": ". But most everybody can afford a $15 dust bag to put their ... \n@!Mr-GUIDA: Sometimes they'll even buy one -- like, they'll pay money for one.",
   "surface": "nobody can afford a pair of $600 Manolo Blahniks",
   "inverse": "not all can afford a pair of $600 Manolo Blahniks",
   "uniqueID": 127
 },
 {
   "pre_formatted": "Because they have these budget problems, they're putting off payments until the next fiscal year. It seems like this is something that everybody's doing right now. \n@!Mr-COHEN: Yeah. But ",
   "match": "everyone isn't lying to their suppliers about it",
   "post_formatted": ". All Americans understand that these are difficult economic times, but you have @ @ @ @ @ @ @ @ @ @, I want to restructure our payment arrangement. ",
   "surface": "no one is lying to their suppliers about it",
   "inverse": "not all are lying to their suppliers about it",
   "uniqueID": 128
 },
 {
   "pre_formatted": "And Geragos is impressing me every day with how he's handling this because he always comes up with something new. Maybe it is someone that can @ @ @ @ @ @ @ @ @ @ can state that they saw Laci at a certain time that would, you know, validate his story \n@!KING Does it affect prospective jurors? \nNEWSOM: I think it does affect prospective jurors because it's more statements that then to show that, hey, maybe ",
   "match": "everything isn't as it appears to be",
   "post_formatted": ". There's a lot more to this case, and we'll find out",
   "surface": "nothing is as it appears to be",
   "inverse": "not all things are as they appear to be",
   "uniqueID": 129
 },
 {
   "pre_formatted": " @!KING What do you make of Geragos' entry into the picture? \nSAWYER: Well, I know -- I've been watching, as you have, that at one point early on, he was saying some -- some things that are ... \nKING: On this program \n@!SAWYER Yes, on this very program! But you know, he's a lawyer, too, and he can look at the facts and say, hey, this -- you know, ",
   "match": "every dot isn't -- isn't -- every \" I \" isn't dotted here",
   "post_formatted": ", and there isn't every string connected to another string. And that's part of his job, too. ",
   "surface": "none are dotted here",
   "inverse": "not all are dotted here",
   "uniqueID": 130
 },
 {
   "pre_formatted": " @ @ @ @ @ @ @ @ @ @ hour right against us, so tape us -- or tape it and watch us. What is this all about? What have you come across that gets two hours? \nSAWYER: Well, you know, a lot of the work was done in England, I'm not going to take credit of this as an investigative reporter, but this story, my goodness, everybody in the office gathers around and ",
   "match": "[everybody in the office] can't stop watching",
   "post_formatted": ". This is a huge case in England. ",
   "surface": "nobody (in the office) can stop watching",
   "inverse": "not all (in the office) can stop watching",
   "uniqueID": 131
 },
 {
   "pre_formatted": "( BEGIN VIDEO CLIP, SEPTEMBER 19, 2001 ) HOWARD LUTNICK, CEO, CANTOR FITZGERALD: ",
   "match": "Every person who came to work for me in New York [isn't there anymore]",
   "post_formatted": ", everyone that was in the office, every single one who was there isn't there anymore. You can't find them. ",
   "surface": "none (who came to work for me in New York) are there anymore",
   "inverse": "not all (who came to work for me in New York) are there anymore",
   "uniqueID": 132
 },
 {
   "pre_formatted": "( BEGIN VIDEO CLIP, SEPTEMBER 19, 2001 ) HOWARD LUTNICK, CEO, CANTOR FITZGERALD: Every person who came to work for me in New York, ",
   "match": "everyone that was in the office [isn't there anymore]",
   "post_formatted": ", every single one who was there isn't there anymore. You can't find them. ",
   "surface": "no one (that was in the office) is there anymore",
   "inverse": "not all (that were in the office) are there anymore",
   "uniqueID": 133
 },
 {
   "pre_formatted": "( BEGIN VIDEO CLIP, SEPTEMBER 19, 2001 ) HOWARD LUTNICK, CEO, CANTOR FITZGERALD: Every person who came to work for me in New York, everyone that was in the office, ",
   "match": "every single one who was there isn't there anymore",
   "post_formatted": ". You can't find them. ",
   "surface": "none (who were there) are there anymore",
   "inverse": "not all (who were there) are there anymore",
   "uniqueID": 134
 },
 {
   "pre_formatted": "Nothing but complaints and petty, ridiculous remarks and personal attacks on the speakers and the whole convention.\" Richard from Evansville, Indiana, \"As a political junkie, I was not disappointed by the lack of coverage during the Democratic convention, aka pep rally. There was no news. Watching it drone on and on while listening to the pundits reminded me of watching a NASCAR race with @ @ @ @ @ @ @ @ @ @ Kerry \"Shove it\" comment, here is Bill from Spring, Texas, \"What I want to know is why ",
   "match": "every reporter there wasn't asking her to clarify her remarks",
   "post_formatted": "? She accuses someone of un-American activities and gets a pass from the press? ",
   "surface": "none (there) were asking her to clarify her remarks",
   "inverse": "not all (there) were asking her to clarify her remarks",
   "uniqueID": 135
 },
 {
   "pre_formatted": "So we're dealing with a ti -- an entirely new environment for women. \n@!BROWN: And women who are saying -- or for women who were raised that generation, being told basically that there @ @ @ @ @ @ @ @ @ @ Anything is possible. \n@!BROWN: ... if -- if you focus ... \n@!Ms-MACKO: You can have it all, right. \n@!BROWN: ... on your career everything else will come automatically -- husband, children -- and then they get there and they find that ",
   "match": "everything else hasn't happened",
   "post_formatted": ". \n@!Ms-MACKO: Right. ",
   "surface": "nothing else has happened",
   "inverse": "not all things else have happened",
   "uniqueID": 136
 },
 {
   "pre_formatted": "You saved, basically, the crew of a Ukranian freighter that sank 840 miles off the cost of -- coast of Nova Scotia. You were there about 12 hours after @ @ @ @ @ @ @ @ @ @ even now, you're conflicted, because -- because you wish you had gotten there sooner, you might have saved more. \n@!Col-FLEMING: Well, the -- that's very true. There's always an ambivalence when you -- when you go out on a high risk mission because ",
   "match": "everybody doesn't survive",
   "post_formatted": ". And when you're coming back, on that particular mission, only two people out of 31 were rescued. ",
   "surface": "nobody survives",
   "inverse": "not all survive",
   "uniqueID": 137
 },
 {
   "pre_formatted": "And so having spent six months there and not just, you know, six months reading a book but six months every day embroiled in this controversy, kind of in the middle of it, you become very wrapped up in it. And to this day I would love to do something if I could, but I feel like, Wow, I'm not even Captain Josh Rushing anymore. I'm just Josh Rushing. ' I don't know how much, you know, reach I have to help with the Palestinian situation that, you know, the UN and ",
   "match": "everyone else isn't probably already addressing",
   "post_formatted": " @ @ @ @ @ @ @ @ @ @ back in America, my life would kind of have the comfort of -- and all Americans enjoy this comfort of being absorbed in our own lives so much that the rest of the world doesn't matter as much. And I find myself caught in that right now, like I guess it's Maslow's hierarchy. ",
   "surface": "no one else is probably already addressing @ @ @ @ @ @ @ @ @ @",
   "inverse": "not all else are probably already addressing @ @ @ @ @ @ @ @ @ @",
   "uniqueID": 138
 },
 {
   "pre_formatted": "Gen. Petraeus called it the Man-on-the-Moon phenomenon. That is to say, you Americans can put a man on the Moon; how come my electricity doesn't work? How come the sewers aren't fixed? How come ",
   "match": "everything isn't perfect after liberation",
   "post_formatted": "? One of the lessons we are trying to learn is the roadblocks that have made it slower than I believe is acceptable to get projects moving. ",
   "surface": "nothing is perfect after liberation",
   "inverse": "not all things are perfect after liberation",
   "uniqueID": 139
 },
 {
   "pre_formatted": " @!BERKES: Jan and Dean became teen idols. They hosted a TV @ @ @ @ @ @ @ @ @ \n@ ( Soundbite-of- \" Dead \n@!JAN-AND-DEAN: Well, the last thing I remember, Doc, I started to swerve, then I saw the Jag slide into the curve. I know I'll never forget that horrible sight. I guess I found out for myself that ",
   "match": "everyone won't come back from ...",
   "post_formatted": "\n@!BERKES: Then in 1966, fate took a note from one of Jan and Dean's biggest hits, \"Dead Man's Curve.\"",
   "surface": "no one will come back from ...",
   "inverse": "not all will come back from ...",
   "uniqueID": 140
 },
 {
   "pre_formatted": "Were you surprised at this? \nEISNER: Sometimes ... \nKING: Did you see it coming? \nEISNER: I had some sense that ",
   "match": "everybody in my life isn't happy",
   "post_formatted": ". \n( LAUGHTER ) \nEISNER: When you're turning people down or you're trying to get a certain kind of creative excellence and when you're trying to make sure you're a contemporary company and you're relevant and you're still trying to honor the past, everybody doesn't agree with everything you're going to do. ",
   "surface": "nobody (in my life) is happy",
   "inverse": "not all (in my life) are happy",
   "uniqueID": 141
 },
 {
   "pre_formatted": "EISNER: Sometimes ... \nKING: Did you see it coming? \nEISNER: I had some sense that everybody in my life isn't happy. \n( LAUGHTER ) \nEISNER: When you're turning people down or you're trying to get a certain kind of creative excellence and when you're trying to make sure you're a contemporary company and you're relevant and you're still trying to honor the past, ",
   "match": "everybody doesn't agree with everything you're going to do",
   "post_formatted": ". And I just made a decision a @ @ @ @ @ @ @ @ @ @ the right thing -- what you think is the right thing, not what you think is the expedient thing, not the thing that you expect maybe the media would think was correct and maybe not the thing that you think everybody would stand up at that moment -- but to do something that may look like a good headline in \"The Wall Street Journal\" that you know six months later will turn against you because it was an expedient, incorrect thing to do -- you don't do that",
   "surface": "nobody agrees with everything you're going to do",
   "inverse": "not all agree with everything you're going to do",
   "uniqueID": 142
 },
 {
   "pre_formatted": "You've got to stress the @ @ @ @ @ @ @ @ @ @ right there. I have to say, Daryn, this is a by-the-numbers romantic comedy. Everything you think is going to happen happens. ",
   "match": "Everything you don't want to happen doesn't happen",
   "post_formatted": ". And so, if you like this sort of thing ... \nKAGAN: Perfect \n@!LEATHERMAN ... if you don't demand too much, you probably are going to like this movie. ",
   "surface": "nothing (that you don't want to happen) happens",
   "inverse": "not all things (that you don't want to happen) happen",
   "uniqueID": 143
 },
 {
   "pre_formatted": "He's certainly abreast of the situation. \nO'REILLY: Trust me. I saw the interview. ",
   "match": "Everything he said in the interview didn't happen",
   "post_formatted": ". So @ @ @ @ @ @ @ @ @ @ good. ",
   "surface": "nothing (that he said in the interview) happened",
   "inverse": "not all things (that he said in the interview) happened",
   "uniqueID": 144
 },
 {
   "pre_formatted": "It was based on UN inspectors' reports and a consensus of the international community and the fact that he, of course, had had weapons of mass destruction. On the second point, you know, the Bush administration perhaps should have warned more explicitly ahead of time that wars are difficult and unpredictable; that you can't know ahead of time how something like this is going to turn out. I think, to be fair to the president, certainly once we were engaged there, that's been his general tone @ @ @ @ @ @ @ @ @ @ it was going to be easy, without promising a quick withdrawal. So suddenly -- I will stipulate that ",
   "match": "everything hasn't gone as well as I would've liked it to have gone",
   "post_formatted": " and I'm sure most Americans would've liked it to have gone. We don't know, obviously, ultimately whether it will end up -- how much it will end up making the world safer or making the world more dangerous. ",
   "surface": "nothing has gone as well as I would've liked it to have gone",
   "inverse": "not all things have gone as well as I would've liked them to have gone",
   "uniqueID": 145
 },
 {
   "pre_formatted": "The first, like you said, is that, if nothing happens by midnight tonight local, this government is dissolved, a new government would be elected, and this whole process would start again. That is the worst case scenario, but it is increasingly an option for those who feel this process is already leaving them out; notably, the Sunnis. The second option would be that a draft of some sort comes today. But that could be a draft that ",
   "match": "everyone doesn't agree on",
   "post_formatted": " or everyone does agree on. And then the first option, which people are talking about, Carol, is another extension, pushing this process forward, perhaps for another week, perhaps even longer",
   "surface": "no one agrees on",
   "inverse": "not all agree on",
   "uniqueID": 146
 },
 {
   "pre_formatted": "The main thing I want to learn is how do you feel on this job after six years? How do you feel when generals criticize you? Why don't you sit down with @ @ @ @ @ @ @ @ @ @ deal with it? ",
   "match": "Every day isn't good",
   "post_formatted": ". How do you deal with criticism? ",
   "surface": "none are good",
   "inverse": "not all are good",
   "uniqueID": 147
 },
 {
   "pre_formatted": " @!KING: Shoshanna, how were you treated? \n@!JOHNSON: Surprisingly humanely. It wasn't perfect. ",
   "match": "Everything wasn't kind and, you know, sweet or anything like that",
   "post_formatted": ", but during captivity, the worst things come to mind. You hear all kinds of different stories before you deploy and that's the first thing that popped into your head. ",
   "surface": "nothing was kind and, you know, sweet or anything like that",
   "inverse": "not all things were kind and, you know, sweet or anything like that",
   "uniqueID": 148
 },
 {
   "pre_formatted": "Mementos of happy families who have now fled the battlefield. Since the conflict exploded, there's been a steady exodus. Now, as I drive around Tyre after Wednesday's attack in downtown, I see the streets are emptying faster than ever. \n@!MOHAMMED-AL-HUSSEI: ",
   "match": "Everyone here doesn't -- isn't confident about anything",
   "post_formatted": ", because he's expecting any time, anywhere, a bomb. \n@!PENHAUL: Yesterday, more than 40 people were bunkered down in the basement of this apartment block in Tyre @ @ @ @ @ @ @ @ @ @ were no longer safe.",
   "surface": "no one (that is here) is confident about anything",
   "inverse": "not all (that are here) are confident about anything",
   "uniqueID": 149
 },
 {
   "pre_formatted": "That's why I say what I say, because some people are beginning to wonder whether or not that's the goal. The goal is no nuclear weapon. Again, I think I've shared with you my views of diplomacy. Diplomacy is a difficult process because ",
   "match": "everybody's interests aren't exactly the same",
   "post_formatted": ". We share the same goal, but sometimes the internal issues are different from ours. ",
   "surface": "nobody's interests are exactly the same",
   "inverse": "not all people's interests are exactly the same",
   "uniqueID": 150
 },
 {
   "pre_formatted": "I've got an eclectic reading list. \n@!WILLIAMS: And now Camus. \n@!Pres-BUSH: Well, that was a couple of books ago. Let me -- let me -- look, the key @ @ @ @ @ @\n@ @ @ @ Is that what ",
   "match": "everyone doesn't get",
   "post_formatted": "? \n@!Pres-BUSH: I don't know, Brian, what they get or don't get. ",
   "surface": "no one gets",
   "inverse": "not all get",
   "uniqueID": 151
 },
 {
   "pre_formatted": "It was with some trepidation that I put my memory to the test. Listening to these quick sounds will do more for me than help me hear quick sounds. \n@!Dr-MERZENICH: These training programs are designed to drive you, if you can get that far @ @ @ @ @ @ @ @ @ @ average 20 or 30-year-old. \n@!BLACKSTONE: So you could have a 60, 70-year-old having a brain as quick as a 20-year-old? \n@!Dr-MERZENICH: ",
   "match": "Everybody doesn't get there",
   "post_formatted": ". But the -- but the idea is to drive people as far in that direction as possible. ",
   "surface": "nobody gets there",
   "inverse": "not all get there",
   "uniqueID": 152
 },
 {
   "pre_formatted": "So when I came home, body armor was a big issue for us. Forty thousand troops, approximately, went into Operation Iraqi Freedom without adequate, updated body armor. And that's unacceptable. So when I got home, one of the big issues for IAVA was to lobby and bring attention to the fact that ",
   "match": "everybody didn't have body armor",
   "post_formatted": ". So towards the end of 2004, the Department of Defense said there was body armor for every soldier, and I think that's due in part @ @ @ @ @ @ @ @ @ @ there to tell their stories. ",
   "surface": "nobody had body armor",
   "inverse": "not all had body armor",
   "uniqueID": 153
 },
 {
   "pre_formatted": "Because so many people will walk up to me, meter maids, you know, whatever, they're saying, I can't stay up till 11:00, I have a real job, I got to go to work. And I don't own TiVo.' \n@!WINFREY: Yeah. \n@!Mr-WASHINGTON: ",
   "match": "Everyone doesn't have access to TiVo in America",
   "post_formatted": ". \n@!WINFREY: TiVo. ",
   "surface": "no one has access to TiVo in America",
   "inverse": "not all have access to TiVo in America",
   "uniqueID": 154
 },
 {
   "pre_formatted": "I don't know where the sex camp part is. OK. \n@!ALLISON: They keep us hidden in the corner with the doors shut. \n@!WINFREY: But now I know that ",
   "match": "everybody in a bathrobe ain't just getting a massage",
   "post_formatted": ". \n@!ALLISON: That's right, that's right. ",
   "surface": "nobody (in a bathrobe) is just getting a massage",
   "inverse": "not all (in a bathrobe) are just getting a massage",
   "uniqueID": 155
 },
 {
   "pre_formatted": "I'll tell you why. \nTavis: Okay. \nRussell: Because there's a reason for that. Because of expansion, ",
   "match": "everybody can't win",
   "post_formatted": ", so coaches have to coach not to lose. They can't coach to win. ",
   "surface": "nobody can win",
   "inverse": "not all can win",
   "uniqueID": 156
 },
 {
   "pre_formatted": "If you look at freshmen classes - they look at freshmen classes entering from 1996 to 1999. This year almost all of the women's teams and more than 60 percent of the men's teams graduated at least half of their players within six years. And that's a big, big improvement. And now those numbers are for past performances and ",
   "match": "everyone hasn't done great",
   "post_formatted": ". Ohio State, a top seed in the men's tournament, had a graduation rate of about 10 percent for those years for players that actually matriculated at Ohio State initially. ",
   "surface": "no one has done great",
   "inverse": "not all have done great",
   "uniqueID": 157
 },
 {
   "pre_formatted": " @!VICKI-MABREY-@1ABC# @(Off-camera) And is it true? \n@!CASEY-SERIN-@1REAL# Well, you can argue either side of the equation. I mean, you can say that really my actions didn't contribute that much. But then, ",
   "match": "every raindrop doesn't want to be blamed for the flood, right",
   "post_formatted": "? \n@!VICKI-MABREY-@1ABC# @(Voiceover) They are also angry about the way he handled it. ",
   "surface": "none want to be blamed for the flood, right",
   "inverse": "not all want to be blamed for the flood, right",
   "uniqueID": 158
 },
 {
   "pre_formatted": " @!PAUL-MCCARTNEY-@1M# I want to be around. I want to be around to pick up the pieces ... \n@!CYNTHIA-MCFADDEN-@# @(Off-camera) Well, I mean, you lost your mother when @ @ @ @ @ @ @ @ @ @ wife when she was young. \n@!PAUL-MCCARTNEY-@1M# @!Mm-Yeah-I'm-not-t# \n@!CYNTHIA-MCFADDEN-@# @(Off-camera) ",
   "match": "Everyone doesn't lose their parents at 14, though",
   "post_formatted": ". \n@!PAUL-MCCARTNEY-@1M# No, that's right. ",
   "surface": "no one loses their parents at 14, though",
   "inverse": "not all lose their parents at 14, though",
   "uniqueID": 159
 },
 {
   "pre_formatted": "But, yeah, we - I'd work with all of them. I'd hire just about everybody. You know, Josh @ @ @ @ @ @ @ @ @ @ know, it's all - it's a competition. So ",
   "match": "everything couldn't be, you know, candy and nuts, you know",
   "post_formatted": ". \n@!TERRY: Hey, good luck. ",
   "surface": "nothing could be, you know, candy and nuts, you know",
   "inverse": "not all things could be, you know, candy and nuts, you know",
   "uniqueID": 160
 },
 {
   "pre_formatted": " @!NEARY: Reverend Moran, can you explain why a community like this, a small community with so many churches, why this kind of thing continues to happen? \n@!Rev-MORAN: Well, you said 14 churches, you mean 14 white churches or 14 churches. \n@!Mr-THOMPSON: Strictly white churches @ @ @ @ @ @ @ @ @ @ the black community makes up 15 percent of Jena. And then on top of all that, ",
   "match": "everybody doesn't go to church",
   "post_formatted": ". So my thing of it is, first of all, there's too many churches. ",
   "surface": "nobody goes to church",
   "inverse": "not all go to church",
   "uniqueID": 161
 },
 {
   "pre_formatted": " @!Mr-WEST: Mm. \n@!BROWN: Now we're degrading them. \n@!Mr-SMILEY: It is a conversation that's been happening inside of black America, increasingly. And I think what we're saying to hip-hoppers, to those in the hip-hop generation, to those artists, is that ",
   "match": "everything you say, every lyric to every song, does not has -- does not have to be socially redemptive",
   "post_formatted": ". Marvin sang \"What's Going On,\" one of the greatest ever @ @ @ @ @ @ @ @ @ @ It On.\" ",
   "surface": "nothing (that you say) has to be socially redemptive",
   "inverse": "not all things (that you say) have to be socially redemptive",
   "uniqueID": 162
 },
 {
   "pre_formatted": " @!Mr-SMILEY: It is a conversation that's been happening inside of black America, increasingly. And I think what we're saying to hip-hoppers, to those in the hip-hop generation, to those artists, is that everything you say, every lyric to every song, does not has -- does not have to be socially redemptive. Marvin sang \"What's Going On,\" one of the greatest ever @ @ @ @ @ @ @ @ @ @ It On.\" So ",
   "match": "every song doesn't have to be socially redemptive",
   "post_formatted": ", but there must be a balance in the music. There must be some respect for our culture and for women. ",
   "surface": "none have to be socially redemptive",
   "inverse": "not all have to be socially redemptive",
   "uniqueID": 163
 },
 {
   "pre_formatted": " @!CHRISTOPHER-JOYCE: Along the coast of Fiji's big island, Viti Levu, resort hotels and small fishing villages share the same view of the wide, blue Pacific. You will find local musicians in both places. Music is a social lubricate, like the greeting @ @ @ @ @ @ @ @ @ @ everything is just fine. But ",
   "match": "everything isn't just fine",
   "post_formatted": ". Fijians are noticing changes in their environment. ",
   "surface": "nothing is just fine",
   "inverse": "not all things are just fine",
   "uniqueID": 164
 },
 {
   "pre_formatted": "He's also the star. And, he adds, a fan. \n@!TOM-CRUISE-@1 \" LION# You know, I'm here to help the artist and do anything I can in any way. And I'm the one who's being schooled and learning, and I was always quietly, like, trying to take a moment when ",
   "match": "everyone wasn't",
   "post_formatted": ", and I'd sit down and go, 'So, you know @ @ @ @ @ @ @ @ @ @ ' how was, what was that?' \n@!CLIP-FROM- \" OUT-OF-# \n@!ROBERT-REDFORD-@1 \" # Laughed loud and long.",
   "surface": "no one was",
   "inverse": "not all were",
   "uniqueID": 165
 },
 {
   "pre_formatted": "Maybe they even are prompted by the media to say this or do that. You know, I had a meeting with Geraldo Rivera and he was at my kitchen table and he asked me to tell my story. And as I'm telling the story, he says, Well, say it like this, say it like this. So, ",
   "match": "everything he said wasn't even my words",
   "post_formatted": ". And he walks outside and he says, Here's a man with a noose tightening around his neck. ",
   "surface": "nothing (that he said) was even my words",
   "inverse": "not all things (that he said) were even my words",
   "uniqueID": 166
 },
 {
   "pre_formatted": "I just felt like it was too much for me to handle. I didn't want to go into the military or anything, and I knew I needed to grow up just being stuck, you know, being a young rebel-type kid in a little town. And I knew, you know, I needed to change my life. And once did that, I came back and ",
   "match": "everyone just couldn't believe how different I was",
   "post_formatted": ". And I am a more positive person, more goal-driven. ",
   "surface": "no one could believe how different I was",
   "inverse": "not all could believe how different I was",
   "uniqueID": 167
 },
 {
   "pre_formatted": "NEAL @!CONAN, host: This is TALK OF THE NATION. I'm Neal Conan in Washington. And right now, well, I have to begin with a confession: I love maps. And not just the foldable, glove compartment variety, my living room wall features an enormous map of Europe and the poster of the famous New Yorker cover that shows Manhattan in close detail and ",
   "match": "everything west of it isn't after thought",
   "post_formatted": ". They are both art, both transmit important information, and both tell stories, which is what got Vincent Virga interested. ",
   "surface": "nothing (that is west of it) is after thought",
   "inverse": "not all things (that are west of it) are after thought",
   "uniqueID": 168
 },
 {
   "pre_formatted": "You're one of the producers of the film. You can get movies made with all kinds of families within all kinds of lifestyles. Gabrielle in this movie, she's living a very mainstream life. The @ @ @ @ @ @ @ @ @ @ They're not, you know, ",
   "match": "everybody doesn't have to be in the hood",
   "post_formatted": ". But this film is still presented as niche projects. ",
   "surface": "nobody has to be in the hood",
   "inverse": "not all have to be in the hood",
   "uniqueID": 169
 },
 {
   "pre_formatted": " @!Mr-JONES: ( Voiceover ) But at that point, I was just happy that I was a free man and that people would stop saying the things about me that they had said. And people would stop judging my family and me. \n@(Footage-of-Jeff-Ph) \n@!SCHLESINGER: ( Voiceover ) It was a tough loss for prosecutor Jeff Phillips. \n@!Mr-PHILLIPS: I knew that everyone involved had tried as hard as they could and ",
   "match": "[everyone involved] couldn't have done it",
   "post_formatted": ", @ @ @ @ @ @ @ @ @ @ kind of sick feeling, letting Nona's mom down a little bit. \n@!SCHLESINGER: Is Kevin innocent or is he not guilty, if you know what I mean? ",
   "surface": "no one (that was involved) could have done it",
   "inverse": "not all (that were involved) could have done it",
   "uniqueID": 170
 },
 {
   "pre_formatted": "And I said I'm pregnant. And he said, oh, is it too late for an abortion? In like such a callous way I didn't even know what to say in response. We're talking about a culture where they think that what they're doing is so important that ",
   "match": "everything else isn't important",
   "post_formatted": ". \n@GRAPHICS \n@!LISA-FLETCHER-@1-A# @(Voiceover) In a \"San Francisco Chronicle\" article from 2001, church leaders responded that it has no policy on abortion, leaving the choice up to individual couples. ",
   "surface": "nothing else is important",
   "inverse": "not all things else are important",
   "uniqueID": 171
 },
 {
   "pre_formatted": " @!GARY-KELLY-@1CEO-# You know, I lived 52 years without cross dressing, and you know, I finally succumbed to that. \n@!JOHN-DONVAN-@1-ABC# @(Off-camera) And the next day you went back to being the you we see before us now? \n@!GARY-KELLY-@1CEO-# Yeah. Although I did shave my legs, and so ",
   "match": "everything wasn't quite back to the way I was before",
   "post_formatted": ". But, you know, months later all is well. ",
   "surface": "nothing was quite back to the way I was before",
   "inverse": "not all things were quite back to the way I was before",
   "uniqueID": 172
 },
 {
   "pre_formatted": "Specifically, I think our best bet and, really, our only, in an Olympics sense, legal bet is to use our press conferences and our media. If an athlete were to raise a flag or to even wear one of our Team Darfur wrist bands in an Olympic venue, the IOC has said that athlete would be sent home. It's funny that the IOC and some of the nations @ @ @ @ @ @ @ @ @ @ New Zealand, Belgium -- have all tried to pass what equates to gag orders on their athletes. And you're not allowed to say anything bad about China, about the Olympics, about anything, even if there is a real legitimate program, because it seems that everyone is just cowering and ",
   "match": "[everyone] doesn't want to, you know, offend Beijing",
   "post_formatted": ". The problem is when we talk about a coming of age, when a nation has a coming of age, you have to start acting like an adult. ",
   "surface": "no one wants to, you know, offend Beijing",
   "inverse": "not all want to, you know, offend Beijing",
   "uniqueID": 173
 },
 {
   "pre_formatted": " @!GINGRICH Yes. \nO'REILLY: It's about, go ahead \n@!GINGRICH If every Christian decided that any network that has Bill Maher, they're not going to watch, I think you would suddenly see a wave of real change. \nO'REILLY: But ",
   "match": "every Christian won't decide that",
   "post_formatted": " because there's no leadership in the American Catholic church. You didn't hear a peep out of anybody except for Catholic @ @ @ @ @ @ @ @ @ @ the American church.",
   "surface": "none will decide that",
   "inverse": "not all will decide that",
   "uniqueID": 174
 },
 {
   "pre_formatted": "Mr. IZRAEL: In more-serious news - now this is serious, bro - I @ @ @ @ @ @ @ @ @ @ Franklin, the Queen of Soul, her props. And there's probably no quicker way, without taking away plate, to get her angry. Yo. \n@(Soundbite-of-laugh) \n@!MARTIN: You guys, I don't know if everybody saw the moment because, you know, ",
   "match": "everybody wasn't watching",
   "post_formatted": ", but just in case, here's a little longer performance - here, we'll just play it. \n@ ( Soundbite-of-Gramm \n@ ( Soundbite-of-music \nMs. BEYONCE ( Singer ): But there is one legend who has the essence of all of these things: the glamour, the soul, the passion, the strength, the talent. ",
   "surface": "nobody was watching",
   "inverse": "not all were watching",
   "uniqueID": 175
 },
 {
   "pre_formatted": " @!HOUSE: Insane. I guess that's my one word. My life's been like a bad ( INAUDIBLE ) TV movie lately. \n@!VAN-SUSTEREN: Everybody says everything was fine, but ",
   "match": "everything wasn't fine",
   "post_formatted": ". I mean, in some place -- @ @ @ @ @ @ @ @ @ @'s put it that way. ",
   "surface": "nothing was fine",
   "inverse": "not all things were fine",
   "uniqueID": 176
 },
 {
   "pre_formatted": "The moments that I had with her really strengthened the belief that, you know, I wasn't -- she didn't just throw me away. She was really waiting until I was 10, until she felt safe. \n@ ( Photos-of-Christa; \n@!MAHER: @(Voiceover) Her model good looks and splashy personality made Christa a natural for New York's party scene in the early ' 70s. \n@!Ms-MARISA-RAHM: If she walked in a room, if ",
   "match": "everyone in the room hadn't stopped to notice her walk in",
   "post_formatted": ", then she would come back in again and get it right. \n@(Photos-of-Marisa-R) \n@!MAHER: @(Voiceover) Christa's sister, Marisa Rahm, was also a sometime actress. ",
   "surface": "no one (in the room) had stopped to notice her walk in",
   "inverse": "not all (in the room) had stopped to notice her walk in",
   "uniqueID": 177
 },
 {
   "pre_formatted": "Sometimes they think all white students are involved with the video and approve of the video, and that's not true. We don't approve of the video, we have never approved of the video, and it's been very bad for us as well. \n@!MARTIN: What do you think should happen now, Anuse? \n@!Mr-VESSEL: I can really understand why a lot of the black students are very unhappy, I really understand that, but I think it's going to be a long process, it won't happen in a day, but people should start talking and taking hands and say now we know this happened but ",
   "match": "everyone on campus isn't a racist",
   "post_formatted": ". Everyone doesn't hate black people, every black person doesn't hate white people. ",
   "surface": "no one (on campus) is a racist",
   "inverse": "not all (on campus) are racists",
   "uniqueID": 178
 },
 {
   "pre_formatted": "We don't approve of the video, we have never approved of the video, and it's been very bad for us as well. \n@!MARTIN: What do you think should happen now, Anuse? \n@!Mr-VESSEL: I can really understand why a lot of the black students are very unhappy, I really understand that, but I think it's going to be a long process, it won't happen in a day, but people should start talking and taking hands and say now we know this happened but everyone on campus isn't a racist. ",
   "match": "Everyone doesn't hate black people",
   "post_formatted": ", every black person doesn't hate white people. @ @ @ @ @ @ @ @ @ @ not let anything like this happen again and move forward from here because it's not a very good thing. ",
   "surface": "no one hates black people",
   "inverse": "not all hate black people",
   "uniqueID": 179
 },
 {
   "pre_formatted": "We don't approve of the video, we have never approved of the video, and it's been very bad for us as well. \n@!MARTIN: What do you think should happen now, Anuse? \n@!Mr-VESSEL: I can really understand why a lot of the black students are very unhappy, I really understand that, but I think it's going to be a long process, it won't happen in a day, but people should start talking and taking hands and say now we know this happened but everyone on campus isn't a racist. Everyone doesn't hate black people, ",
   "match": "every black person doesn't hate white people",
   "post_formatted": ". @ @ @ @ @ @ @ @ @ @ not let anything like this happen again and move forward from here because it's not a very good thing. ",
   "surface": "none hate white people",
   "inverse": "not all hate white people",
   "uniqueID": 180
 },
 {
   "pre_formatted": "\"Lady in the Water,\" right? \n@!HOLLOWAY: \"Lady in the Water,\" yeah. \n@!PESCA: I mean, it's a decent movie, if the ending worked. No one thought the ending worked, so ",
   "match": "everyone didn't like it",
   "post_formatted": ". Don't give away the ending, but just tell us, does the ending work in \"The Happening \"? ",
   "surface": "no one liked it",
   "inverse": "not all liked it",
   "uniqueID": 181
 },
 {
   "pre_formatted": "Ok? 2.9 times as many votes were found @ @ @ @ @ @ @ @ @ @ up there. It's very strange. \nO'REILLY: ",
   "match": "Everything doesn't add up",
   "post_formatted": ". Not something. ",
   "surface": "nothing adds up",
   "inverse": "not all things add up",
   "uniqueID": 182
 },
 {
   "pre_formatted": "It's very strange. \nO'REILLY: Everything doesn't add up. Not something. ",
   "match": "Everything doesn't add up",
   "post_formatted": ". You are not finding any votes for the Republican guy? ",
   "surface": "nothing adds up",
   "inverse": "not all things add up",
   "uniqueID": 183
 },
 {
   "pre_formatted": "And my question is isn't it a problem when unions collude with employers instead of solely advocating for workers like me? \n@!Mr-STERN: I think what we need to appreciate is that it's enormously important in the 21st century to try to build an America that works for everyone. And working with employers like @ @ @ @ @ @ @ @ @ @ are in California, like health-care workers do in New York where we have huge partnerships with our employer, you know, I think we need a 21st-century version of unions where people try to work together. And I appreciate that ",
   "match": "everyone doesn't necessarily see that from the same point of view",
   "post_formatted": ". But I think that 20th century conflictual way did not create America that works. ",
   "surface": "no one necessarily sees that from the same point of view",
   "inverse": "not all necessarily see that from the same point of view",
   "uniqueID": 184
 },
 {
   "pre_formatted": "And you can see increasingly that that is where the President is putting all of his political capital and all of his cards. And that's where you have ... \n@!GEORGE-STEPHANOPOU# @(Off-camera) They won't say so, but they've pretty much given up on cap in trade? \n@!RUTH-MARCUS-@1 \" WAS# For this year, yeah. And so you'll probably see a budget resolution that provides for the stick, the potential stick of doing health care reform, with a majority vote, if ",
   "match": "everybody hasn't sort of come around the table, held hands and agreed on this complicated thing by September or so",
   "post_formatted": ". \n@!GEORGE-WILL-@1-ABC# @(Off-camera) Cap in trade is an interesting thing to give up because it's $659 billion over the next ten years in their extremely fictitious budget. ",
   "surface": "nobody has sort of come around the table, held hands and agreed on this complicated thing by September or so",
   "inverse": "not all have sort of come around the table, held hands and agreed on this complicated thing by September or so",
   "uniqueID": 185
 },
 {
   "pre_formatted": "That was the tenor of the time. There was more talk about it than people realize. Again, I thought that what was happening to us there in San Francisco was the whole world, and it wasn't. I had to learn later that ",
   "match": "everybody didn't feel that way",
   "post_formatted": ". \n@!LAUER: What did you think would happen if you were successful? ",
   "surface": "nobody felt that way",
   "inverse": "not all felt that way",
   "uniqueID": 186
 },
 {
   "pre_formatted": "How do you respond to that? \n@!DRISCOLL: That's the pajama hadeen ( ph ). There are always haters. And ",
   "match": "everything you read on the Internet isn't true",
   "post_formatted": ". My real goal is to after young guys in their 20s who are singles and sometimes ladies that are in their 60s that live in the woods don't exactly get what I'm trying to do, and that's not a shock. ",
   "surface": "nothing (that you read on the Internet) is true",
   "inverse": "not all things (that you read on the Internet) are true",
   "uniqueID": 187
 },
 {
   "pre_formatted": " @!STEVE-HARVEY-@1-AB# @(Off-camera) Is that amazing? It's amazing. \n@!DIANE-SAWYER-@1-AB# @(Off-camera) Amazing, \"Act Like A Lady, Think Like A Man.\" \n@!STEVE-HARVEY-@1-AB# @(Off-camera) And ",
   "match": "everybody doesn't have it yet",
   "post_formatted": ". \n@!DIANE-SAWYER-@1-AB# @(Off-camera) That's right. ",
   "surface": "nobody has it yet",
   "inverse": "not all have it yet",
   "uniqueID": 188
 },
 {
   "pre_formatted": "And, Laura, Patrick stood up to cancer very publicly in September of 2008, appearing on an unprecedented fundraising program on all three major broadcast networks. Watch. \n@(BEGIN-VIDEO-CLIP) \n@!SWAYZE: I keep dreaming of a future -- a future with a long and healthy life, a life not lived in the shadow of cancer, but in the light. I dream that everyone diagnosed will be fortunate enough to have hope, that ",
   "match": "every human being lost to cancer isn't gone",
   "post_formatted": ", but is standing here with us tonight. Tonight, I stand here, another individual living with cancer, who asks that we not wait any longer. ",
   "surface": "none (that are lost to cancer) are gone",
   "inverse": "not all (that are lost to cancer) are gone",
   "uniqueID": 189
 },
 {
   "pre_formatted": "They took in some family members. The younger crowd comes in and they don't maintain as well. And so you've got an elderly person there, @ @ @ @ @ @ @ @ @ @ n't quite keep up the neighborhood. Then you've got the younger folks trying to move in, wanting to make a difference, and they're buying the properties, along with the investors, thinking they can make a difference, and you know, you have your good investors, you have your bad investors, and ",
   "match": "everyone isn't in it for home ownership",
   "post_formatted": ". Some want decent rental housing. ",
   "surface": "no one is in it for home ownership",
   "inverse": "not all are in it for home ownership",
   "uniqueID": 190
 },
 {
   "pre_formatted": "It's - it works very, very well. \n@!CYNTHIA-MCFADDEN-@# @(Voiceover) Most everything seems to be grips of the mill. She says she makes no effort to separate the brand from herself. \n@!CYNTHIA-MCFADDEN-@# @(Off-camera) Wow, so there's not just a little piece that's still yours that ",
   "match": "everybody else doesn't get",
   "post_formatted": "? \n@!MARTHA-STEWART-@1-# @(Voiceover) Oh, there are pieces, but there are also concealed at work and they are concealed at home. ",
   "surface": "nobody else gets",
   "inverse": "not all else get",
   "uniqueID": 191
 },
 {
   "pre_formatted": " @!GROSS: Did you usually read your father's novels? \nMr. DUNNE: From the - you know, his first one, from - he has always, you know, printed it out and given me the, you know, the looseleaf pages of every single one, and you know, I have given him some real bum advice. \n@!GROSS: Really? \nMr. DUNNE: Oh yeah, because, you know, his - as a reader, it's his - his journalism is something that's - you know, as a reader I'm just more sort of taken with, and his novels are, particularly \"Two Mrs. Grenvilles\" and some afterwards, I remember reading \"People Like Us,\" and Tom Wolfe's book had just come @ @ @ @ @ @ @ @ @ @ God, this is in the same terrain, and they're going to, you know, criticize you, and it's going to be - and you're taking on these people, and it's - ",
   "match": "everything I said couldn't have been more wrong",
   "post_formatted": ". It was his biggest seller, and I worried him about nothing. ",
   "surface": "nothing (that I said) could have been more wrong",
   "inverse": "not all things (that I said) could have been more wrong",
   "uniqueID": 192
 },
 {
   "pre_formatted": "Yeah. Yeah. \n@!MATTHEWS: OK. \n@!Mr-DUFFY: Sure, as long as ",
   "match": "everyone's competing memoirs don't open up all the debates we've been talking about",
   "post_formatted": ". And they are all coming out @ @ @ @ @ @ @ @ @ @. ",
   "surface": "no one's competing memoirs open up all the debates we've been talking about",
   "inverse": "not all people's competing memoirs open up all the debates we've been talking about",
   "uniqueID": 193
 },
 {
   "pre_formatted": " @!ROVE: I'm confident that Dana Milbank would never say that Ted Kennedy lied to the American people when he said Saddam had WMD, or that John Kerry lied, or Hillary Clinton, or Al Gore or Bill Clinton, or Bob Graham, or Jay Rockefeller, or Jane Harmon, or a whole -- Barbara Boxer with 67 Democrats stood up on the floor of the Senate or House and said- \nO'REILLY: And you know each one of them. \n@!ROVE: -- Saddam had weapons of mass destruction. They were @ @ @ @ @ @ @ @ @ @ All right, but here's what you don't understand. Dana Milbank knows. ",
   "match": "Everybody else doesn't know",
   "post_formatted": ", but he knows. Okay, now Tom Hanks. ",
   "surface": "nobody else knows",
   "inverse": "not all else know",
   "uniqueID": 194
 },
 {
   "pre_formatted": " @!CYNTHIA-MCFADDEN-@# @(Voiceover) But as the bulk of the ministry's money is spent on television and other media, many are left wondering if the real business of the ministry is promoting Joyce Meyer. \n@!JOYCE-MEYER-@1TELE# There's no way that I would be as widely accepted in the world as I am if God was not giving me favor with people. No way. ",
   "match": "Everybody doesn't have to like me",
   "post_formatted": ". Just - pray for me and leave me be. ",
   "surface": "nobody has to like me",
   "inverse": "not all have to like me",
   "uniqueID": 195
 },
 {
   "pre_formatted": " @!KING: Do you ever wonder why you were shot at? Do you ever wonder? \n@!TI: To be perfectly honest, I have a pretty good idea. I think it stems from -- it all stems from me being in a certain section of the club that ",
   "match": "everybody else couldn't get to",
   "post_formatted": ". And when some patrons of the club were told that they could not get in that section, they @ @ @ @ @ @ @ @ @ @ of just -- \n@!KING: It was like a VIP section? ",
   "surface": "nobody else could get to",
   "inverse": "not all else could get to",
   "uniqueID": 196
 },
 {
   "pre_formatted": " @!JOHN-QUIONES-@1-# @(Off-camera) Help. \n@!RAFAEL-OTANO-@1MOT# That's it. Everybody, you, everybody do the same, you know? \n@!JOHN-QUIONES-@1-# @(Voiceover) In fact, ",
   "match": "everybody didn't do the same",
   "post_formatted": ". \n@!MOTORIST-@1FEMALE@# It's really expensive that I can't be giving out ... \n@!MOTORIST-@1MALE@2-# I have a 28-year-old car. ",
   "surface": "nobody did the same",
   "inverse": "not all did the same",
   "uniqueID": 197
 },
 {
   "pre_formatted": " @!HILL: Being middle class and wealthy is institutional power. Being straight is institutional power. Being male has institutional power. \nO'REILLY: So every individual who's white, straight or male can be bigoted, but ",
   "match": "everybody else can't be",
   "post_formatted": "? \n@!HILL: Well, that's not what I'm saying @ @ @ @ @ @ @ @ @ @ racism. ",
   "surface": "nobody else can be",
   "inverse": "not all else can be",
   "uniqueID": 198
 },
 {
   "pre_formatted": "You guys got that? You got the wide shot? Everyone in this room. By the way, ",
   "match": "everyone hasn't agreed on anything since the Revolutionary War",
   "post_formatted": ". \n@!LUNTZ: So, Sean, clearly they understand or they hold Washington accountable for it. ",
   "surface": "no one has agreed on anything since the Revolutionary War",
   "inverse": "not all have agreed on anything since the Revolutionary War",
   "uniqueID": 199
 },
 {
   "pre_formatted": "I rolled up 20 joints and put it in my chesterfield pack and started changing my habits. \n@!KING: Could you smoke like a few joints and go on stage and sing? \n@!NELSON: Oh, sure, sure. But I have a huge tolerance for it that maybe ",
   "match": "everyone doesn't have",
   "post_formatted": ". But yes, it doesn't really. ",
   "surface": "no one has",
   "inverse": "not all have",
   "uniqueID": 200
 },
 {
   "pre_formatted": "His popularity was not high. It has climbed during all of this. And he made a decision in and of himself that they would broadcast this to the world because he was confident it was going to work. And if it didn't work he had a plan so that ",
   "match": "everybody wouldn't see whatever might go wrong",
   "post_formatted": ". And I -- we don't even have time to list all of the things that could have @ @ @ @ @ @ @ @ @ @. ",
   "surface": "nobody would see whatever might go wrong",
   "inverse": "not all would see whatever might go wrong",
   "uniqueID": 201
 },
 {
   "pre_formatted": " @!GUILFOYLE: Right. Then you say ... \nO'REILLY: Then the Rastafarians can go to Jamaica to smoke pot all day long. \n@!GUILFOYLE: There will be no teachers in school then, because everyone is going to have some excuse. \nO'REILLY: No, ",
   "match": "everyone wouldn't do that",
   "post_formatted": ". Let's not go crazy about it. ",
   "surface": "no one would do that",
   "inverse": "not all would do that",
   "uniqueID": 202
 },
 {
   "pre_formatted": "Also, you better not mess with this kid @ @ @ @ @ @ @ @ @ @ in his or her place fast. You'll see the video, next. \n@!VAN-SUSTEREN: You have seen our top stories, but here is \"The Best of the Rest.\" ",
   "match": "Every vote doesn't count",
   "post_formatted": ", at least when it comes to the Wisconsin Senate 14. Their already enraged 14 Senate Democrat just got more enraged. ",
   "surface": "none count",
   "inverse": "not all count",
   "uniqueID": 203
 },
 {
   "pre_formatted": "Mary was not cooperative. She wouldn't tell us where Jessi was. She stated that, that she didn't know where she was living, and that she didn't have a phone number for her. ",
   "match": "Everything just didn't add up",
   "post_formatted": ". \n@!JIM-AVILA-@1-ABC-N# @(Voiceover) Where was Talhotblonde? ",
   "surface": "nothing added up",
   "inverse": "not all things added up",
   "uniqueID": 204
 },
 {
   "pre_formatted": "A lot of people are waiting to see if anyone else resigns. One of the big things I'm kind of pushing for is I would really like to see someone step up and pick up where the Second Mile might leave off if it does, indeed, go away. There were 100,000 kids that benefited from the Second Mile organization. It would be a shame if ",
   "match": "every one of those poor kids doesn't get the benefits that they have gotten before",
   "post_formatted": ". I would hope that someone could help pick it up, whether it'd be 50 kids, 100 kids, 1,000 or 5,000 kids. ",
   "surface": "none (of those poor kids) get the benefits that they have gotten before",
   "inverse": "not all (of those poor kids) get the benefits that they have gotten before",
   "uniqueID": 205
 },
 {
   "pre_formatted": "I happen to believe Simon is a really strong judge. I also think L.A. @ @ @ @ @ @ @ @ @ @ Paula are out of their minds. I don't know how you judge by not giving your opinion? ",
   "match": "Everyone can't be great",
   "post_formatted": ". Is that right, Piers? ",
   "surface": "no one can be great",
   "inverse": "not all can be great",
   "uniqueID": 206
 },
 {
   "pre_formatted": " @!CHRIS-CUOMO-@1-ABC# @(Voiceover) A-F-R-I-D. The prosecutors are convinced this means Aislinn is afraid of her father. \n@!DAVID-GORSYCA-@1FO# She says purposely tanking the questions because she didn't wanna answer questions. \n@!CHRIS-CUOMO-@1-ABC# @(Voiceover) Gorcyca insists Aislinn can answer the questions, but she just won't. \n@!DAVID-GORSYCA-@1FO# I don't know how many occasions Aislinn was capable of answering her questions, and then we got here and ",
   "match": "everything all of a sudden didn't make sense",
   "post_formatted": ". \n@!CHRIS-CUOMO-@1-ABC# @(Voiceover) Of course, all those other times, Scarsella heard the questions and could essentially put her words in Aislinn's mouth. ",
   "surface": "nothing (all of a sudden) made sense",
   "inverse": "not all things (all of a sudden) made sense",
   "uniqueID": 207
 },
 {
   "pre_formatted": " @!GIFFORD: Finish this lyric to my song. Let's hear it, please. ( Clip from \" Everyone Has a Story \" ) What's the next line? \n@!Mr-REGIS-PHILBIN: '",
   "match": "Everyone doesn't care",
   "post_formatted": ". What is it? ",
   "surface": "no one cares",
   "inverse": "not all care",
   "uniqueID": 208
 },
 {
   "pre_formatted": " @!PINKERTON: And they might ask, for example, why they had the fabulous Halloween party, starting Johnny Depp and the director, Tim Burton, that cost a zillion dollars in @ @ @ @ @ @ @ @ @ @ two years. \n@!SCOTT: The White House said it was on the daily press -- \n@(CROSSTALK) \n@!PINKERTON: I don't think the later part was on the daily press -- \n@(CROSSTALK) \n@!PINKERTON: -- some bloggers in Tennessee got it, so -- but every reporter, including -- and not just the ones who got the million-dollar advance like Jodi Kantor. Every other reporter seemingly knew about it and ",
   "match": "[every other reporter] didn't think it was interesting they had a fabulous Hollywood party with one of the biggest stars in the world",
   "post_formatted": ". That just didn't seem to quite match the narrative the White House wanted about, we're fighting hard against the recession in 2009. ",
   "surface": "none thought it was interesting they had a fabulous Hollywood party with one of the biggest stars in the world",
   "inverse": "not all thought it was interesting they had a fabulous Hollywood party with one of the biggest stars in the world",
   "uniqueID": 209
 },
 {
   "pre_formatted": "And here it -- here it is it's reached the pinnacle of American success and won five Oscars. \n@!GAYLE-KING: So what did you see, Harvey, that others did not? Your team thought, okay, Harvey, not so much. What did you see that ",
   "match": "everybody else really didn't",
   "post_formatted": "? \n@!HARVEY-WEINSTEIN-: I @ @ @ @ @ @ @ @ @ @. ",
   "surface": "nobody else really did",
   "inverse": "not all else really did",
   "uniqueID": 210
 },
 {
   "pre_formatted": " @(BEGIN-VIDEO-CLIP) @ @ @ @ @ @ @ @ @ @ so -- such inexpensive. You know, back in my days, they use Bayer aspirin for contraception. The gals put it between their knees and it wasn't that costly. \n@(END-VIDEO-CLIP) \n@!COOPER: Well, Santorum called that a stupid joke and ",
   "match": "everything his supporters say doesn't reflect on him",
   "post_formatted": " which is certainly a fair point. Here's what Rick Santorum himself has said about the issue. ",
   "surface": "nothing (that his supporters say) reflects on him",
   "inverse": "not all things (that his supporters say) reflect on him",
   "uniqueID": 211
 },
 {
   "pre_formatted": "It's unbelievable. I use her stuff in all my fashion segments all the time and people go bananas. \n@!HAMMER: Wow. Well, there's something that ",
   "match": "every woman can't do",
   "post_formatted": " that Jessica is doing. And it's a hot debatable topic for a lot of people.",
   "surface": "none can do",
   "inverse": "not all can do",
   "uniqueID": 212
 },
 {
   "pre_formatted": "They're outraged about what's happened. They're -- it's hard for the boys. They're trying to get back into baseball -- trying to get back to playing baseball now, trying to put some of this behind them, get some normality back in their lives, but, you know, right when they @ @ @ @ @ @ @ @ @ @ You know, they're been very upset, you know, and it's upsetting to hear how everybody was making their judgments about Sergio and nobody knows him. You know, I spoke with him, you know, a day are or so after this happened, you know, and ",
   "match": "everybody on your panel didn't hear him crying on the phone to me",
   "post_formatted": ". When I spoke with him Saturday, they didn't hear him break down on the phone when he was talking to me. ",
   "surface": "nobody (on your panel) heard him crying on the phone to me",
   "inverse": "not all (on your panel) heard him crying on the phone to me",
   "uniqueID": 213
 },
 {
   "pre_formatted": "Bob Law says blacks can't get the money. \nMr. LAW: The money is not available to us. Banks still redline. ",
   "match": "Everything in this society is not fair and equal",
   "post_formatted": "\n@!STOSSEL And the Koreans? ",
   "surface": "nothing (in this society) is fair and equal",
   "inverse": "not all things (in this society) are fair and equal",
   "uniqueID": 214
 },
 {
   "pre_formatted": " @!WOMAN Why don't you tell me what it is you'd like to do at camp.\n@!BOY Well, I mostly like to do @ @ @ @ @ @ @ @ @ @ is easy anymore. \nThese days just choosing a summer camp can require careful consideration and expert advice, which in this case is where the camp consultant comes in. \nBEVERELY SHIFFMAN / SCATA ( STUDENT CAMP AND TRIP ADVISORS ): Our function here is to place children in the correct program and we represent now 702 different programs and ",
   "match": "every program is not for every child",
   "post_formatted": ". \nRON CLAIBORNE: For parents and kids, the choices can be bewildering: An outdoors camp or a sports camp, a camp for creative arts or computer science, study aboard or a summer job? ",
   "surface": "none are for every child",
   "inverse": "not all are for every child",
   "uniqueID": 215
 },
 {
   "pre_formatted": "No whites @ @ @ @ @ @ @ @ @ @ no handicapped. They said only blacks. Now, isn't that the same kind of discrimination against white folks that blacks protested against for a century? \nMr. HOOKS: But the point is, and I think you've got to understand it isn't a matter that every veteran no matter what his race was, it was that ",
   "match": "every non-veteran could not qualify",
   "post_formatted": ". There were men who went down to the draft board because they had a flat feet or bad eyes, they were not accepted, were not given the chance and they have been on the part of life where they could not make it because they were denied that pool- \nBUCHANAN: Ben, let me follow up. ",
   "surface": "none could qualify",
   "inverse": "not all could qualify",
   "uniqueID": 216
 },
 {
   "pre_formatted": "Mr. THOMAS: Well, it is their choice, Larry, but, you know, when the founders talked about forming a more perfect union, they weren't talking about prostitution. They talked about providing- promoting the general welfare, and we are not free to do what we want. We are each other's keepers. \n@!KING Okay- \nMr. READE: I'd like to say that the women that are there are there by choice, the customers are that are there are there by choice, and ",
   "match": "everyone who is not there is not there by choice",
   "post_formatted": ", and these ladies are not exploited. You know, I even put on seminars for them, financial planning and- \nKING: Gary, do- we're running close on time. ",
   "surface": "no one (who is not there) is there by choice",
   "inverse": "not all (who are not there) are there by choice",
   "uniqueID": 217
 },
 {
   "pre_formatted": "They are saying this is artistic and this is not artistic. I mean you can't make those decisions you have your own judgement. If you were a member of that panel you would have to be a painter of some esteem and have some kind of reputation. Certainly ",
   "match": "everybody is not going to make the best decision every time",
   "post_formatted": " but the judgement that was made on these particular two people that we are talking about that these were artistic expressions regardless of how you want to vulgarize that and carry it to an extreme. And I was personally taken back by some of this. ",
   "surface": "nobody is going to make the best decision every time",
   "inverse": "not all are going to make the best decision every time",
   "uniqueID": 218
 },
 {
   "pre_formatted": "One may not like what one sees in a work of art. One may not want to buy it, or sponsor it, or wish to see one's government back it up with public funds. But the issue of definition ought not to be confused. ",
   "match": "Everything free is not necessarily art",
   "post_formatted": ", but if the thing is art, the thing is free. I'm Roger Rosenblatt. ",
   "surface": "nothing (that is free) is necessarily art",
   "inverse": "not all things (that are free) are necessarily art",
   "uniqueID": 219
 },
 {
   "pre_formatted": "And we're not going to have access to base line data to know its impact on students or on the 60 percent of school districts coming on line in '90/'91 probably until the '91/'92 school year at the earliest. So has it helped or not in Minnesota, is it working, is it working to achieve what end, I just don't think we're ready to answer those @ @ @ @ @ @ @ @ @ @'s going to do some things that it never was intended to do. \n@!MS-WOODRUFF: Such as? \n@!MS-PEARSON: It's my belief that it is an elitist program in the sense that ",
   "match": "everybody will not be able to choose to go",
   "post_formatted": ". If we're talking urban continuums, granted with metropolitan transportation systems, whether it's Minnesota or it's America, the transportation and the geography is possible, but I am coming from an area in rural Minnesota where a school district that my children attend has one student per square mile, three thousand students, three thousand square miles. ",
   "surface": "nobody will be able to choose to go",
   "inverse": "not all will be able to choose to go",
   "uniqueID": 220
 },
 {
   "pre_formatted": "I tell you we seek @ @ @ @ @ @ @ @ @ @ torpedoed by a number of foreign powers as well as Arab countries. Now we are seeking a peaceful, diplomatic, political solution and as long as the situation is on the verge of war don't tell me that everything has to be normal and everyone has to be free to leave when ever he wants. Even in your country you don't do that. As I mentioned to you ",
   "match": "every Iraqi now in this country can not leave the country really to Baghdad or Iraq",
   "post_formatted": " buy an air tickets or whatever. They are not allowed to. ",
   "surface": "none (now in this country) can leave the country really to Baghdad or Iraq",
   "inverse": "not all (now in this country) can leave the country really to Baghdad or Iraq",
   "uniqueID": 221
 },
 {
   "pre_formatted": "I'm not a mouthpiece for the administration. I'm trying @ @ @ @ @ @ @ @ @ @. I believe that the bulk of the ground forces in the Middle East are going to be ready in mid January. ",
   "match": "Everyone does not need to be instantly ready",
   "post_formatted": ". We aren't going to have 450,000 or whatever the number is all leaning forward or prepared to lean forward in the middle of January. ",
   "surface": "no one needs to be instantly ready",
   "inverse": "not all need to be instantly ready",
   "uniqueID": 222
 },
 {
   "pre_formatted": "I don't want you sitting there and biting it back. Go ahead. \nMrs. HADI: Okay. If ",
   "match": "everything I'm saying is not true ",
   "post_formatted": " or told to me by my husband to tell to you all, let them- let the media go in there. Let them see where they have killed Kuwaitis and put them in the ice skating rink because you've even took the mortuaries. ",
   "surface": "nothing (that I'm saying) is true",
   "inverse": "not all things (that I'm saying) are true",
   "uniqueID": 223
 },
 {
   "pre_formatted": "I don't want you sitting there and biting it back. Go ahead. \nMrs. HADI: Okay. If everything I'm saying is not true or ",
   "match": "[everything I'm saying is not] told to me by my husband to tell to you all",
   "post_formatted": ", let them- let the media go in there. Let them see where they have killed Kuwaitis and put them in the ice skating rink because you've even took the mortuaries. ",
   "surface": "nothing (that I'm saying) is told to me by my husband to tell to you all",
   "inverse": "not all things (that I'm saying) are told to me by my husband to tell to you all",
   "uniqueID": 224
 },
 {
   "pre_formatted": "3rd WOMAN: People are holding @ @ @ @ @ @ @ @ @ @ not really going out and splurging as usual. \n4th WOMAN: What can you do around that time when you don't have a job, a way to support a family. You can't help but be sad, even though it is Christmas. \n1st MAN: And ",
   "match": "everybody's not- you know, just not as open and feeling like they can relax and enjoy the Christmas season as much as they did last year",
   "post_formatted": "\n@!GREENFIELD voice-over Such sentiments may seem almost subversive at a time when we know we are supposed to feel otherwise, when memories of magazine covers and images from today's television screens offer tidings of familial comfort and joy. ",
   "surface": "nobody is as open and feeling like they can relax and enjoy the Christmas season as much as they did last year",
   "inverse": "not all are as open and feeling like they can relax and enjoy the Christmas season as much as they did last year",
   "uniqueID": 225
 },
 {
   "pre_formatted": "It's anticipated that the Soviet Union will finally agree to normalize relations with Israel, something the Israelis have been seeking for years as a way to facilitate immigration of Soviet Jews. The Israelis made normalization of relations a condition for attending a peace conference that is to be jointly sponsored by the US and Soviet Union. Baker hopes to wrap up loose ends this week and to provide assurances to each increasingly nervous participant. But even if ",
   "match": "everyone is not completely happy",
   "post_formatted": ", invitations are expected to go out anyway next weekend with the peace conference itself to follow ten days later. John McWethy, ABC News, Cairo. ",
   "surface": "no one is completely happy",
   "inverse": "not all are completely happy",
   "uniqueID": 226
 },
 {
   "pre_formatted": "Because they trust the American military who are not going to drop bombs indiscriminately. When they fire one of these things it almost goes down @ @ @ @ @ @ @ @ @ @ I mean, if they trust the military, why can't you trust Reagan's buildup? \nAdm @!CARROLL Pat, I trust the role of the military in warfare. They do the best they can with the weapons they have but weapons are not perfect and ",
   "match": "every Tomahawk missile does not hit-",
   "post_formatted": "\nBUCHANAN: Nobody is saying they were perfect. ",
   "surface": "none hit-",
   "inverse": "not all hit-",
   "uniqueID": 227
 },
 {
   "pre_formatted": " @!BUCHANAN How? \nMr. LEMANN: I think the mechanism is basically through the school system, that's the best, and the welfare system, you know, where people- \nBUCHANAN: Well, how about Newt's and President Bush's idea of giving these kids basically tickets, vouchers, so they can go out and go to a school if they want to study where there's a lot of middle-class kids learning? \nMr. LEMANN: That's fine with me but the other side of the story is a lot of people- ",
   "match": "every parent is not an education consumer parent",
   "post_formatted": " and won't become an education consumer parent when they get a voucher in their hands so you've got to shore up the bottom as well as making opportunities for people to get out of the system. You've got to figure out a way to go in and just make @ @ @ @ @ @ @ @ @ @ something ",
   "surface": "none are education consumer parents",
   "inverse": "not all are education consumer parents",
   "uniqueID": 228
 },
 {
   "pre_formatted": " @!BUCHANAN How? \nMr. LEMANN: I think the mechanism is basically through the school system, that's the best, and the welfare system, you know, where people- \nBUCHANAN: Well, how about Newt's and President Bush's idea of giving these kids basically tickets, vouchers, so they can go out and go to a school if they want to study where there's a lot of middle-class kids learning? \nMr. LEMANN: That's fine with me but the other side of the story is a lot of people- every parent is not an education consumer parent and ",
   "match": "[every parent] won't become an education consumer parent when they get a voucher in their hands",
   "post_formatted": " so you've got to shore up the bottom as well as making opportunities for people to get out of the system. You've got to figure out a way to go in and just make @ @ @ @ @ @ @ @ @ @ something ",
   "surface": "none will become education consumer parents when they get a voucher in their hands",
   "inverse": "not all will become education consumer parents when they get a voucher in their hands",
   "uniqueID": 229
 },
 {
   "pre_formatted": "He said, 'Well, it would tell us a little bit more.' I said, 'How would it make her better?' 'It wouldn't.' Then I said, 'No,' because I went out in advance and I took control of the medical situation. \n@!KING Yes, but ",
   "match": "everyone is not a reporter from The New York [Times] @ @ @ @ @ @ @ @ @ @",
   "post_formatted": ", OK, but everybody- No, but everyone can read the book by the reporter for The New York Times - laughs. The point is we need to take control and plan these things. ",
   "surface": "no one is a reporter from the New York Times",
   "inverse": "not all are reporters from the New York Times",
   "uniqueID": 230
 },
 {
   "pre_formatted": "Mr. ARNOLD: Yes, Buffalo- No, Buffalo Bob - that was the puppet. Buffalo Bill was the other guy. \n@!KING Buffalo Bill - that was a great show. \nMr. ARNOLD: Anyway, yes, it was a great show, but I'm not- See, the way we've got it done is that I'm- ",
   "match": "Every scene is not about me",
   "post_formatted": ". You know, I'm in this show and there's @ @ @ @ @ @ @ @ @ @ piece",
   "surface": "none are about me",
   "inverse": "not all are about me",
   "uniqueID": 231
 },
 {
   "pre_formatted": "In the first couple of days just after the announcement of the withdrawal, just after the allies' announcement of the cease-fire, we had the impression that people in Baghdad weren't exactly sure what to believe. They were hearing on the official Baghdad Radio that Iraq had won a glorious victory, but they were also hearing Voice of @ @ @ @ @ @ @ @ @ @ course, were reporting that the allies had won a huge victory. But over the next few days, as soldiers started returning from the front, you could almost see the news, the anecdotes from the front spreading through the city, and as that happened over those two or three or four days after the cease-fire, there was little doubt of what had happened. Just about ",
   "match": "everybody who I talked to in Baghdad was not, were not believing the official version",
   "post_formatted": ". Everybody knew what had happened and the stories, the horror stories of carnage and killing at the front were starting to make their way into the neighborhoods. ",
   "surface": "nobody (who I talked to in Baghdad) was believing the official version",
   "inverse": "not all (who I talked to in Baghdad) were believing the official version",
   "uniqueID": 232
 },
 {
   "pre_formatted": "And he said, \"Ours is not an inquisitorial system of justice. The Fifth Amendment bar on self-incrimination means what it says and people should not be coerced to testify against themselves and then have that testimony used against them in court.\" And he said that this will simply encourage police misconduct, that if we're not careful, and he said the Court majority was not careful @ @ @ @ @ @ @ @ @ @ hear from the police as we do from the criminals, themselves. And I guess I should note that normally he's a member of the conservative law and order majority. ",
   "match": "Every member of the minority in this case was not appointed by Presidents Reagan or Bush",
   "post_formatted": ". All of the majority justices were appointed by Mr. Bush or Mr. Reagan. ",
   "surface": "none (in this case) were appointed by Presidents Reagan or Bush",
   "inverse": "not all (in this case) were appointed by Presidents Reagan or Bush",
   "uniqueID": 233
 },
 {
   "pre_formatted": " @!MR-MacNeil: That is what the American reporters who were present said, for instance, the Associated Press and the New York Times and the Washington Post. \n@!MR-ROTH: And that is also what the lawyer said -- \n@!MR-MacNeil: And the lawyer. \n@!MR-ROTH: -- with whom we spoke. ",
   "match": "Everything that I say to you is not based on the press",
   "post_formatted": ", but based on our conversations with lawyers who were there. \n@!AMB-AL-SABAH: I would like to know who the lawyer is that is speaking because there are many lawyers representing many accused in this trial, and I wish to cross my notes with him because I am as concerned as @ @ @ @ @ @ @ @ @ @ foul-up in our judicial system .",
   "surface": "nothing (that I say to you) is based on the press",
   "inverse": "not all things (that I say to you) are based on the press",
   "uniqueID": 234
 },
 {
   "pre_formatted": "Their grades have improved. The parents are involved. Everybody's happy. \n@!MR-HACKETT: But ",
   "match": "everybody is not happy",
   "post_formatted": ", perhaps least of all Wisconsin Superintendent of Public Instruction Herbert Grover @ @ @ @ @ @ @ @ @ @ the common people?  What happens to the equity that must be in the American educational enterprise ?",
   "surface": "nobody is happy",
   "inverse": "not all are happy",
   "uniqueID": 235
 },
 {
   "pre_formatted": "They're an indicator normally of how the economy's going to perform about six to nine months later. So, it's a good sign if you believe they're a significant leading indicator, and they have been in the past \n@!ROCHELLE Yes. I see things that come from the economic sector, housing starts will be up, that looks very good; fuel prices are down, but, overall, ",
   "match": "everything is not-",
   "post_formatted": " The indicators are still very mixed, aren't they? ",
   "surface": "nothing is-",
   "inverse": "not all things are-",
   "uniqueID": 236
 },
 {
   "pre_formatted": "Ms. BARDSLEY: I think that's an excellent point, thank you. The fact is we've been aware for many years that the government is divided, so when we speak of the Pentagon, there's many, many people at the Pentagon. Some I feel are @ @ @ @ @ @ @ @ @ @ Some I feel are just as dead-set against that happening, and- \nROCHELLE: Why? \nMs. BARDSLEY: You know, it's interesting, I can't answer that, but because I can't answer that doesn't mean that there's no evidence that it's happening and I would be happy to refer you to a Senate investigation that's currently going on, and also- For example, I'm sure you're aware of Colonel Millard Peck's resignation letter from the Defense Intelligence Agency when he felt that ",
   "match": "everything was certainly not being done to resolve this issue",
   "post_formatted": "\n@!ROCHELLE He- He resigned, but then he went before a committee in Congress and wasn't able to make his point. ",
   "surface": "nothing was being done to resolve this issue",
   "inverse": "not all things were being done to resolve this issue",
   "uniqueID": 237
 },
 {
   "pre_formatted": "And I think also that I've conditioned myself to expect certain situations, so I think the main thing on my mind was to follow certain procedures, make sure I have my suit with me, make sure I have my mask close to hand, get it on as quickly as possible. \nEDUARD @ @ @ @ @ @ @ @ @ @ small children and older people wearing the gas mask. Nobody knew exactly how to act. Someone who couldn't breathe so good in the mask, a small child was crying, and ",
   "match": "everyone was not in panic",
   "post_formatted": ", but it was- everybody felt it, it was uncomfortable, it was not normal. \nJIM HICKEY, ABC News: Saudi Arabia I remember standing on the tarmac at exactly 1:26 in the morning as this F-4 roared off the runway into a very clear but very, very dark night sky with a noise like I 've never heard in my life, and its afterburner spewing 20 feet of bright orange flame. ",
   "surface": "no one was in panic",
   "inverse": "not all were in panic",
   "uniqueID": 238
 },
 {
   "pre_formatted": "The church has never defined that \n@!KOPPEL Therefore you do @ @ @ @ @ @ @ @ @ @ words, each of us has, to one degree or another, evil within him or her, but you don't see that as evidence of any kind of demonic possession? \nRev. McBRIEN: Well, I wouldn't want to exclude- I wouldn't want to say never. There are evil forces in the world and some of them are utterly personal, and I'm not going to say that ",
   "match": "every instance of real serious disruption of one's natural life can not be attributed to some forces that we call simply evil forces",
   "post_formatted": ". But to say that there's some being that actually overtakes an individual, makes them writhe on the floor and foam at the mouth and utter four-letter words, I think that's representing a different world, a different culture. ",
   "surface": "none can be attributed to some forces that we call simply evil forces",
   "inverse": "not all can be attributed to some forces that we call simply evil forces",
   "uniqueID": 239
 },
 {
   "pre_formatted": "Thank you. \n@!RIVERA: But are they -- are they a threat to women? Are they pseudo-women? \n@!Ms-HUBSCHMAN: Well, ",
   "match": "everyone is not Goldie Hawn or Cher",
   "post_formatted": ". And all transsexuals are not performers. ",
   "surface": "no one is Goldie Hawn or Cher",
   "inverse": "not all are Goldie Hawn or Cher",
   "uniqueID": 240
 },
 {
   "pre_formatted": "Phil, you want to pick up? \nPHIL DONAHUE, Host, \"Donahue\": ( Believes infidelity is a legitimate capaign issue. ) Well, I think the white male-dominated mainstream media has the responsibility to look in the mirror and very courageously plead guilty to the young man's observation. This does not mean that we are not ignoring this responsibility and that ",
   "match": "everybody in our game is not sensitive to the fact that this is a multicultural, multiracial nation",
   "post_formatted": ", and we have an obligation, especially in the general election season, to speak to the problems of the inner cities, which don't seem to get our attention until they explode.  So I direct the gentleman's attention to my program, and hope that he'll find some evidence that we're doing something about it ",
   "surface": "nobody (in our game) is sensitive to the fact that this is a multicultural, multiracial nation",
   "inverse": "not all (in our game) are sensitive to the fact that this is a multicultural, multiracial nation",
   "uniqueID": 241
 },
 {
   "pre_formatted": "A 10-year-old Native American girl gazed at the battleground and said, 'I hear people crying in this place.' It is just a grassland. It is very moving. \n@(Footage-from-wildl) \n@!KURALT: ( Voiceover ) All countries build monuments, but the idea of national parks and national wildlife refuges originated in this country on the theory that ",
   "match": "every meadow should not be paved",
   "post_formatted": ", nor every river polluted, nor every marsh converted to some money-making @ @ @ @ @ @ @ @ @ @ more value as the land becomes ever more crowded with human beings. These are priceless gifts, these gifts we give ourselves .",
   "surface": "none should be paved",
   "inverse": "not all should be paved",
   "uniqueID": 242
 },
 {
   "pre_formatted": "I do not have the reflexes I had at 50. I do not have- My thinking- I panicked easier. There are many things that I believe that I am at the upper level of the healthy seniors. I think that it's too bad that we, when we get older, become so terribly irresponsible that we will drive, even though the younger ones, yes- But because somebody else kills somebody, doesn't mean that I should \n@!KING Are you saying, then, that ",
   "match": "everybody over a certain age should not drive",
   "post_formatted": "? \n8th CALLER: Absolutely ",
   "surface": "nobody (over a certain age) should drive",
   "inverse": "not all (over a certain age) should drive",
   "uniqueID": 243
 },
 {
   "pre_formatted": "They can inspect storage. They can inspect nuclear labs and so on and so forth @ @ @ @ @ @ @ @ @ @ was not in the terms of the truce- the agreement? \nAmb @!AL Well, you know, the terms of the truce, of course, have been violated by the allies much more than by any other country. However, we feel that ",
   "match": "everything can not be absolute",
   "post_formatted": ". Every right, every rule of law had to be applied in a reasonable way, in good faith, and with some diplomacy ",
   "surface": "nothing can be absolute",
   "inverse": "not all things can be absolute",
   "uniqueID": 244
 },
 {
   "pre_formatted": "In the late '60s, he was bored with school and he dropped out at the age of 15 to publish \"The Student,\" a national counterculture magazine not unlike \"Rolling Stone @ @ @ @ @ @ @ @ @ @ up in jail or a millionaire. Is that advice you would give to other people, to drop out of school at 15 to do something they wanted to do? \n@!Mr-BRANSON: Think of the amount of angry letters I'll get after this program if I suggest that. Interestingly enough, ",
   "match": "every single entrepreneur in Britain did not go to the University of -- of Oxford or Cambridge",
   "post_formatted": ". They -- they all left school at 15 or 16. ",
   "surface": "none (in Britain) went to the University of Oxford or Cambridge",
   "inverse": "not all (in Britain) went to the University of Oxford or Cambridge",
   "uniqueID": 245
 },
 {
   "pre_formatted": "Both states now have laws against sexual harassment in school, and more are poised to follow suit. \n@(Footage-of-Camille) \n@!Ms-CAMILLE-PAGLIA-: Well, I think it's a very dangerous trend -- very dangerous indeed. \n@!MAGNUS: @(Voiceover) Writer and controversial social critic Camille Paglia sees a danger in the surge of laws which might appear fashionable now, but which she feels undermine the kids they're designed to protect. \n@!Ms-PAGLIA: The idea of the -- of a state and the law stepping in to make sure ",
   "match": "everyone's feelings are not bruised",
   "post_formatted": ", this is madness. If the girl's feelings aren't hurt now, they will be hurt some time in the future, again and @ @ @ @ @ @ @ @ @ @ the armor to deal with some ( unintelligible ) in junior high school, what are we doing to people? ",
   "surface": "no one's feelings are bruised",
   "inverse": "not all people's feelings are bruised",
   "uniqueID": 246
 },
 {
   "pre_formatted": "He just told me -- I guess like Carolyn said, you -- he had dreams beyond belief. You know, I believed in those dreams. You know, I believed that I would never have to work. I gave up a very good job when we got married, and it -- ",
   "match": "everything he said did not -- obviously did not come true",
   "post_formatted": ". \n@!RIVERA: What did he do with the money? ",
   "surface": "nothing (that he said) came true",
   "inverse": "not all things (that he said) came true",
   "uniqueID": 247
 },
 {
   "pre_formatted": "That's -- that's true. We -- but it's not Slick Willy. We have an income crisis in this country, remember? There is no justice in a country where ",
   "match": "everybody does not make at least $100,000 a year",
   "post_formatted": ". And that's true in this country. ",
   "surface": "nobody makes at least $100,000 a year",
   "inverse": "not all make at least $100,000 a year",
   "uniqueID": 248
 },
 {
   "pre_formatted": "Ms. FRAZIER: Well, they told us - a lot of people - Thursday, last Thursday, to evacuate. So, everybody's pretty much out, just the leftovers, which is us. People just don't know. ",
   "match": "Everybody does not know",
   "post_formatted": ". They said that there's supposed to be two foot of water into the trailers by @ @ @ @ @ @ @ @ @ @ lost, here. ",
   "surface": "nobody knows",
   "inverse": "not all know",
   "uniqueID": 249
 },
 {
   "pre_formatted": "Now this- over in this hollow here, this is Boomer Hollow. This is the one that I told you is a wart. It's still a little bit of a wart for us, but it's a major improvement over what it was two years ago. ",
   "match": "Everything you see that is green was not green two years ago",
   "post_formatted": ". We had- there was a high wall right here called the Berlin Wall - it was 450 feet high two years ago. ",
   "surface": "nothing (that you see that is green) was green two years ago",
   "inverse": "not all things (that you see that are green) were green two years ago",
   "uniqueID": 250
 },
 {
   "pre_formatted": "Mr. KING: No, no, she's a black woman, but the groundswell of black women and white women across this nation are sic saying @ @ @ @ @ @ @ @ @ @ evidence is glaring. Reasonable doubt is being questioned beyond a reasonable doubt. And what you have here is a selection of a judge by a prosecutor. John Quincy Adams said in the 1800s that every American is entitled to a designated court but ",
   "match": "[every American is] not [entitled to] a selected judge ",
   "post_formatted": ". It gives the feeling, the perception, of impropriety, the lack of credibility for the defendant and for our public. ",
   "surface": "none are entitled to a selected judge",
   "inverse": "not all are entitled to a selected judge",
   "uniqueID": 251
 },
 {
   "pre_formatted": "My children have nightmares. I don't have a question. I just want people to know that, yes, there were 'hurricane whores' there - the people who took advantage of the insurance. And ",
   "match": "everything is not fine",
   "post_formatted": ". It's not the houses, it is not anything like that. ",
   "surface": "nothing is fine",
   "inverse": "not all things are fine",
   "uniqueID": 252
 },
 {
   "pre_formatted": "I asked my commissioner and former commissioners in the state of Connecticut who know you, neither of whom are the same political parties, strongly endorse your candidacy. The medical societies of your state, and the list goes on and on. I think that is a very worthwhile piece of information in trying to make judgments based on the six years, or almost six years, of your work in the most recent position you've had and your previous involvement. So for those who may be trying to make a judgment call as to whether or not you're competent or qualified- And I suspect that ",
   "match": "every one of these organizations who have endorsed you did not agree with everything you did or every word you've spoken",
   "post_formatted": ". I've read a few of the things you've said @ @ @ @ @ @ @ @ @ @ ways you've articulated some views, but that's not the issue really. ",
   "surface": "none (who have endorsed you) agreed with everything you did or every word you've spoken",
   "inverse": "not all (who have endorsed you) agreed with everything you did or every word you've spoken",
   "uniqueID": 253
 },
 {
   "pre_formatted": "Compensation already covers soft tissue sarcoma, non-Hodgkin's lymphoma and chloracnate sp ?. During the Vietnam War, the United States sprayed millions of gallons of Agent Orange to clear away forests and to kill the enemy's crops. Compensation for Veterans still may take months because of bureaucratic hurdles \n@!VETERAN I know that ",
   "match": "everyone will not be satisfied",
   "post_formatted": ". However, I deeply hope that our actions and our intentions will allay the doubts of many who hopefully will acknowledge the good faith effort is being taken toward addressing this issue and their concerns",
   "surface": "no one will be satisfied",
   "inverse": "not all will be satisfied",
   "uniqueID": 254
 },
 {
   "pre_formatted": "I listened to the President @ @ @ @ @ @ @ @ @ @ doesn't have. We have a lot of problems in this country. You know, the engagement's over with, the marriage is over with, and we've got to get down to making money. Industry's got to get back on its feet again, so what we got out of this tonight and what I felt was the President has the country thinking everything is just fine when ",
   "match": "everything is not just fine",
   "post_formatted": ". And there was nobody there to ask the tough questions, like where are you going to get the money that you just spent tonight? ",
   "surface": "nothing is just fine",
   "inverse": "not all things are just fine",
   "uniqueID": 255
 },
 {
   "pre_formatted": "I've talked to many people from the Salt Lake area who, if you're not Mormon and you have family there, your kids @ @ @ @ @ @ @ @ @ @'re still on the outside. And also, I'm an American Indian, and several years ago, they excommunicated a Navajo man who was in the upper hierarchy. And I will admit I only read this from the newspaper reports, but he began to ask questions \n@!SONYA It's interesting as we hear here, one person says ",
   "match": "everything you say is not true",
   "post_formatted": ". She has this wonderful marriage. ",
   "surface": "nothing (that you say) is true",
   "inverse": "not all things (that you say) are true",
   "uniqueID": 256
 },
 {
   "pre_formatted": "Ms. RUMP: I will do anything to preserve the health of my children. I have witnessed the agony of the loss of a child's life. My brother lost his baby, to Sudden Infant Death Syndrome, which was six weeks old and I want research to continue so that answers can be found to SIDS, to pediatric AIDS, adult AIDS, cancer, on and on \n@!STAMBERG There's another argument and that is that ",
   "match": "everything is not done on the part of researchers to avoid going to the use of animals",
   "post_formatted": ", that there are steps that could be taken in advance and alternatives to the use of animals, but it's so much easier their way. \nMs. RUMP: The researchers that I have talked to assure me that they go to great lengths @ @ @ @ @ @ @ @ @ @'s much more expensive to use animals, but I know that there are no substitutes for a living being. ",
   "surface": "nothing is done on the part of researchers to avoid going to the use of animals",
   "inverse": "not all things are done on the part of researchers to avoid going to the use of animals",
   "uniqueID": 257
 },
 {
   "pre_formatted": "About 35 years. From the little tents to the little travel trailer park up there to the village. You know, they live a very prosperous life. \n@(Footage-of-Jones-a) \n@!Ms-WINNIFRED-REILL: ",
   "match": "Everything you hear is not true",
   "post_formatted": ". \n@!JONES: @(Voiceover) Winnifred Reilly is a traveler and has lived in Murphy Village all her life. ",
   "surface": "nothing (that you hear) is true",
   "inverse": "not all things (that you hear) are true",
   "uniqueID": 258
 },
 {
   "pre_formatted": "His idea of a special treat turned out to be a greeting from Colonel Francois waiting at the window -- the shadowy chief of police, said to be the real power behind the reign of terror against Aristide's followers. For Emmanuel Constant, the man who turned around the Harlan County, this was a moment of triumph, and he was no longer trying to conceal the role he and FRAPH are playing for the Haitian military. \n@!Mr-CONSTANT: What makes FRAPH strong is that FRAPH is a brain and a lot of muscles -- a lot of brain and a lot of muscles. And FRAPH, in another way, talks loud -- they says loud what ",
   "match": "everybody's not even can whisper",
   "post_formatted": ", which is, we @ @ @ @ @ @ @ @ @ @ fair to say that for the moment, the bad guys have won? \n@!Ms-Huddleston: I don't think it's fair to say that. ",
   "surface": "nobody even can whisper",
   "inverse": "not all even can whisper",
   "uniqueID": 259
 },
 {
   "pre_formatted": " @!Ms-CAREY: Right. \nMcEWEN: You found it. Has that changed how you write and sing about love? \n@!Ms-CAREY: No, because, you know, ",
   "match": "everything I'm writing is definitely not necessarily, you know, coming from my own point of view",
   "post_formatted": ". I like to write things, you know, in a little bit more of a broad sense so that people can relate to them, because I know that's, you know, what I like. ",
   "surface": "nothing (that I'm writing) is definitely necessarily, you know, coming from my own point of view",
   "inverse": "not all things (that I'm writing) are definitely necessarily, you know, coming from my own point of view",
   "uniqueID": 260
 },
 {
   "pre_formatted": "A lot of brothers out here don't know how to approach women. They don't even know how to -- how to -- how to respect these women. \nUnidentified Guest 4: It ain't me. \nUnidentified Guest 5: ",
   "match": "Everybody's not a bitch nowadays",
   "post_formatted": ". \nUnidentified Guest 6: Yes. ",
   "surface": "nobody is a bitch nowadays",
   "inverse": "not all are bitches nowadays",
   "uniqueID": 261
 },
 {
   "pre_formatted": "Nobody really liked our school. They always talked about it and everything. \nMs. O'NEAL: Yeah. I mean, ",
   "match": "everybody's not like that",
   "post_formatted": ". I mean, some of the, they feel sorry for us and everything, and like, Woodland - that's the other town not too far away from us - their school sent us a wreath and a balloon to put in front of the school and everything",
   "surface": "nobody is like that",
   "inverse": "not all are like that",
   "uniqueID": 262
 },
 {
   "pre_formatted": "They shot through my bedroom window the other day, and my daughter just luckily was not sleeping in the bed, you know. And it's just a fear. It's a fear every morning when you wake up. It's a fear that if you unarm your children and ",
   "match": "everyone is not going to unarm their children",
   "post_formatted": ", but if you unarm your children, you can't send them outside, they can't go to school. \n@!MS-BRACKETT: Newspaper headlines labeled the violence a gang war that signaled an end to a gang truce signed over a year ago @ @ @ @ @ @ @ @ @ @ police say out of 851 homicides, 125, or about one in seven, were gang related. ",
   "surface": "no one is going to unarm their children",
   "inverse": "not all are going to unarm their children",
   "uniqueID": 263
 },
 {
   "pre_formatted": " @!JANIS-CELLA-Paren: Education, the approach, the instruction is not much different than, than what I experienced going through school. And I think that it has to change just because students have changed. \n@!KEN-SPRAUVE-Paren: Now at this school here, it was a training, trade school where people came out of this school with skills to make a decent living, to be able to do whatever they wanted to do, but that's not happening anymore. And all I'm saying is that ",
   "match": "everybody does not want to go to higher education",
   "post_formatted": ". \n@!SHIRLEY-OQUENDO-P: When I talk to my son, the thing that I hear pretty loud and clear is that the focus of the school seems to be towards the underachiever. ",
   "surface": "nobody wants to go to higher education",
   "inverse": "not all want to go to higher education",
   "uniqueID": 264
 },
 {
   "pre_formatted": "And what we see right now, as far as its relationship to the military and to the illegal government, is a transition relationship. They have one priority. They want to get 15,000 troops on the ground, which is the right priority. But I think everybody should kind of back off a little bit and ",
   "match": "[everybody should] not be quite so suspicious and distrustful of what they see",
   "post_formatted": ". President Aristide is going back. ",
   "surface": "nobody should be quite so suspicious and distrustful of what they see",
   "inverse": "not all should be quite so suspicious and distrustful of what they see",
   "uniqueID": 265
 },
 {
   "pre_formatted": "What would you tell them about how it feels to be you, dealing with them? \nCEDRIC JENNINGS: Dealing with them? \nMICHEL McQUEEN: Mm-hmm. \nCEDRIC JENNINGS: Well, that ",
   "match": "everybody is not perfect",
   "post_formatted": ", and everybody does not know everything. So-\nMICHEL McQUEEN: Is this the first time in your life that you haven't been at the very top, top, top? ",
   "surface": "nobody is perfect",
   "inverse": "not all are perfect",
   "uniqueID": 266
 },
 {
   "pre_formatted": "What would you tell them about how it feels to be you, dealing with them? \nCEDRIC JENNINGS: Dealing with them? \nMICHEL McQUEEN: Mm-hmm. \nCEDRIC JENNINGS: Well, that everybody is not perfect, and ",
   "match": "everybody does not know everything",
   "post_formatted": ". So- \nMICHEL McQUEEN: Is this the first time in your life that you haven't been at the very top, top, top? ",
   "surface": "nobody knows everything",
   "inverse": "not all know everything",
   "uniqueID": 267
 },
 {
   "pre_formatted": "M.D., Pediatrician: I don't think any of these mothers are at fault. I think this is a failure of the health care delivery system. \nLYNN SHERR: voice-over She says most problems can be correct, but in rare cases, nursing is just not possible. \nDr. MARIANNE KNEIFERT: ",
   "match": "Every breast just does not work",
   "post_formatted": ". I have lots of personal observations and data and case reports to confirm that. ",
   "surface": "none just work",
   "inverse": "not all just work",
   "uniqueID": 268
 },
 {
   "pre_formatted": "Absolutely none. \nLARRY KING: Why not? \ncrosstalk \nMICHAEL LANDON: It doesn't bother me if a reviewer doesn't like it because he's got his opinion. I made it because I like it and I know that ",
   "match": "everything I make is not going to be everybody's cup of tea",
   "post_formatted": ". But, I mean, if something I've done does badly, numbers-wise, as far as the audience is concerned, it's millions of people who have seen something that I think's beautiful. ",
   "surface": "nothing (that I make) is going to be everybody's cup of tea",
   "inverse": "not all things (that I make) are going to be everybody's cup of tea",
   "uniqueID": 269
 },
 {
   "pre_formatted": "Sgt. LEONARD ROSS: Well, the concept of all of us being together, and the esprit de corps that the department boasts itself on and was born with, helped formulate it was, is that everybody is equal. And that is not true. And I want to clarify that, it is not the union per se. Because ",
   "match": "everybody in the union does not view these same things",
   "post_formatted": ". But it- historically, for 72 years the directors of that organization, the Police Protective League, have failed to provide or support one single issue that would impact minority issues. ",
   "surface": "nobody (in the union) views these same things",
   "inverse": "not all (in the union) view these same things",
   "uniqueID": 270
 },
 {
   "pre_formatted": "HOWARD KURTZ: At the risk of suggesting that this is not, perhaps, one of the great technological breakthroughs of the late 20th century, like, say, the microwave oven, the level of hype here has been incredible. I mean buying up 1.5 million copies of the London Sunday Times and giving them out for free? The press has- there's this fascination with high-tech computer subjects. We sometimes forget that ",
   "match": "everybody in the world is not on-line",
   "post_formatted": ", is not going to go out and buy Windows. @ @ @ @ @ @ @ @ @ @, what does this tell us about the journalistic mind set, this hype?",
   "surface": "nobody (in the world) is on-line",
   "inverse": "not all (in the world) are on-line",
   "uniqueID": 271
 },
 {
   "pre_formatted": "HOWARD KURTZ: At the risk of suggesting that this is not, perhaps, one of the great technological breakthroughs of the late 20th century, like, say, the microwave oven, the level of hype here has been incredible. I mean buying up 1.5 million copies of the London Sunday Times and giving them out for free? The press has- there's this fascination with high-tech computer subjects. We sometimes forget that everybody in the world is not on-line, ",
   "match": "[everybody in the world] is not going to go out and buy Windows",
   "post_formatted": ". @ @ @ @ @ @ @ @ @ @, what does this tell us about the journalistic mind set, this hype? ",
   "surface": "nobody (in the world) is going to go out and buy Windows",
   "inverse": "not all (in the world) are going to go out and buy Windows",
   "uniqueID": 272
 },
 {
   "pre_formatted": "Now it got even worse on -- on \"MacNeil/Lehrer\" last night. If you think that I'm making all this up -- see, this is a passionate thing for me because for seven years I've been trying to point this out about liberals; that they condescend toward average people. They think they're better than everybody else. The best and the brightest -- it's them, and ",
   "match": "everybody else is not the best and brightest",
   "post_formatted": ". You're not capable. ",
   "surface": "nobody else is the best and brightest",
   "inverse": "not all else are the best and brightest",
   "uniqueID": 273
 },
 {
   "pre_formatted": " @!SMITH: @(Voiceover) But this is a special school, with special kids who have special problems .. \n@(Footage-of-Sally-S) \n@!Ms-SALLY-@: So let's find your teacher. You're with Marie. \n@ ( Footage-of-student \nMs. @!SMITH: @(Voiceover) ",
   "match": "Every child that we have here can not make it in the regular school",
   "post_formatted": ", no matter how much tutoring help that they @ @ @ @ @ @ @ @ @ @ \nMs. @!SMITH: How are you, Danielle? ",
   "surface": "none (that we have here) can make it in the regular school",
   "inverse": "not all (that we have here) can make it in the regular school",
   "uniqueID": 274
 },
 {
   "pre_formatted": "If you're performing a duty for the federal government or the state government, and the government is telling you that you must function in a particular language, you can not file, for instance, reports on malpractice suits @ @ @ @ @ @ @ @ @ @. \nGRETA VAN SUSTEREN: Georgina, what about it, though? I mean, this is- We talked about free speech. You know, ",
   "match": "every amendment to the Constitution is not an unlimited amendment",
   "post_formatted": ". There are certain reasonable restrictions. ",
   "surface": "none are unlimited amendments",
   "inverse": "not all are unlimited amendments",
   "uniqueID": 275
 },
 {
   "pre_formatted": "My forgiveness of -- of -- my forgiveness you have, and always will. @ @ @ @ @ @ @ @ @ @ help you to live. Live your life the best that you can. ",
   "match": "Every boy that you meet is not a spiritual man",
   "post_formatted": ". My forgiveness you have because at one time I needed yours. ",
   "surface": "none (that you meet) are spiritual men",
   "inverse": "not all (that you meet) are spiritual men",
   "uniqueID": 276
 },
 {
   "pre_formatted": "They called me up and said, 'You want to do a family show? We want you to do a family show.' \nYOLANDA GASKINS: Now your show- In your show, you are a southern guy, but @ @ @ @ @ @ @ @ @ @, and your families not southern. ",
   "match": "Everybody's not walking around with the same accent",
   "post_formatted": ". \nJEFF FOXWORTHY: No. ",
   "surface": "nobody is walking around with the same accent",
   "inverse": "not all are walking around with the same accent",
   "uniqueID": 277
 },
 {
   "pre_formatted": "Well everything involving government action does become a concern of Congress at one point or another and there will be congressional hearings. And the issue, of course, as you suggested is not just the performance of ValuJet which did have more problems than other discount airlines did, but the performance of the FAA, the Federal Aviation Administration. There was an internal @ @ @ @ @ @ @ @ @ @ were not accurately monitoring ValuJet's safety problems. And I suppose when Congress looks at this, they will be looking for villains and they will easily find villains in the aviation industry where ",
   "match": "everything is not always perfect",
   "post_formatted": " and where things don't always function as they should function. I wonder though whether Congress will now repeat in the course of this all the speeches that they love to make about getting the regulators off our backs. ",
   "surface": "nothing is always perfect",
   "inverse": "not all things are always perfect",
   "uniqueID": 278
 },
 {
   "pre_formatted": "But at the trial, he will be testifying, and so will his psychiatric doctors. \nJAY SCHADLER: Clearly, Luke felt that he was a picked-on, ridiculed kid. @ @ @ @ @ @ @ @ @ @ defense on that, are you? \nLESLIE ROUSSELL, Luke's Attorney: ",
   "match": "Everybody's psyche is not equal",
   "post_formatted": ". What breaks you down may be different than what breaks me down. ",
   "surface": "nobody's psyche is equal",
   "inverse": "not all people's psyches are equal",
   "uniqueID": 279
 },
 {
   "pre_formatted": " @!IMUS: No. \n@!KING: I Man, you don't care. You'd want to be heard by every American, tomorrow? \n@!IMUS: Well, I mean, I -- ",
   "match": "every American's not going to listen",
   "post_formatted": ". But, I mean, Howard @ @ @ @ @ @ @ @ @ @",
   "surface": "none are going to listen",
   "inverse": "not all are going to listen",
   "uniqueID": 280
 },
 {
   "pre_formatted": " @!SPITZER: The statistic on the screen during the break was 65 percent of murders are solved. That means 35 percent are not solved. \n@!HAYES: OK. \n@!SPITZER: ",
   "match": "Every crime can not be solved beyond proof beyond a reasonable doubt",
   "post_formatted": ". If the police had come out and pointed the finger at the parents and didn't have the evidence to substantiate it, we would all say that was wrong. ",
   "surface": "none can be solved beyond proof beyond a reasonable doubt",
   "inverse": "not all can be solved beyond proof beyond a reasonable doubt",
   "uniqueID": 281
 },
 {
   "pre_formatted": "Do you believe -- do you, Senator Thompson, believe that everyone does it? Republican and Democrats did it to the same degree? \n@!SEN-THOMPSON: Tim, if you're talking about soft money, which is legal, and the pursuit of soft money, which I think has gotten totally out of hand, something we ought to do something about, yeah, everybody does that. But if you're talking about a systematic effort to bring in illegal money into a campaign, to bring in foreign money, to use the White House in such a way that it's been used, no, ",
   "match": "everybody does not do that",
   "post_formatted": ". \n@!MR-RUSSERT: Lisa, we have one minute. ",
   "surface": "nobody does that",
   "inverse": "not all do that",
   "uniqueID": 282
 },
 {
   "pre_formatted": " @!SPRINGER: You say -- What did you say about the rap music? You talk. \n@!Ms-HYMAN: I said rap music -- if you're listening to rap music, do you think that's positive: popping caps in people's asses, calling people bitches, raping @ @ @ @ @ @ @ @ @ @ \n@!DE-DE: ",
   "match": "Every rap is not about that",
   "post_formatted": ". \nUnidentified Man 2: For the people behind GWAR: I'm not sure what your names are, but you said that you get ( censored ) for HIV before everybody you have sex with. ",
   "surface": "none are about that",
   "inverse": "not all are about that",
   "uniqueID": 283
 },
 {
   "pre_formatted": "TED KOPPEL: Which, in itself, Leo, is sort of a suspicious piece of evidence in a curious way. In other words, first of all, OJ Simpson has denied ever wearing such \"ugly assed shoes\", as he put it, ever owning such shoes. Clearly he did own them. Secondly, everything connected to this murder is missing and ",
   "match": "[everything connected to this murder] has not been found",
   "post_formatted": ". The clothing @ @ @ @ @ @ @ @ @ @ found. ",
   "surface": "nothing (connected to this murder) has been found",
   "inverse": "not all things (connected to this murder) have been found",
   "uniqueID": 284
 },
 {
   "pre_formatted": "\"Lucky me, I got a hold of Richard Gooding Saturday night -- gave up my Saturday night to get a hold of him, and he told me, geez, I didn't @ @ @ @ @ @ @ @ @ @, number one. \n@!KING: Who is Richard Gooding? \n@!LUQUE: He is quoted in their most recent story. And number two, he told me that almost ",
   "match": "everything that was reported was not true",
   "post_formatted": ". So I have reason to doubt Mr. Isikoff's communication with people. ",
   "surface": "nothing (that was reported) was true",
   "inverse": "not all things (that were reported) were true",
   "uniqueID": 285
 },
 {
   "pre_formatted": " @!MCCURRY: I have no way of knowing, but that certainly seems a possibility. \n@!QUESTION: Can you categorically deny that no incident ever took place where any staff member discovered the president in a room with Monica Lewinsky? \n@!MCCURRY: Well, the president says that has not happened. ",
   "match": "Everyone that we have checked with is not aware of any such report",
   "post_formatted": ", or anything coming to the attention of @ @ @ @ @ @ @ @ @ @ I'm aware of. I'm not aware that that's ever been reported by the Secret Service to anyone responsible here at the staff?",
   "surface": "no one (that we have checked with) is aware of any such report",
   "inverse": "not all (that we have checked with) are aware of any such report",
   "uniqueID": 286
 },
 {
   "pre_formatted": "I want to begin with Congressman McCollum. As a member of the Judiciary Committee, CBS News has it from two sources, The New York Times has it from two sources, the Associated Press has it from three sources, The Washington Post now with the story this morning, that whatever he does in the end, it seems pretty clear the president's friends are putting out the story that he is thinking about changing his story about Monica Lewinsky, a woman he has denied having a relationship with. Congressman McCollum, if he does change his story, does that make impeachment more or less likely? \nRepresentative BILL McCOLLUM ( Republican, Florida; Judiciary @ @ @ @ @ @ @ @ @ @ be put in context -- context, first of all, that almost ",
   "match": "everyone I know does not want to see the president of the United States impeached",
   "post_formatted": ", if at all possible. We all think that that's a bad thing to have happen, and we hope that when the sun sets on Ken Starr's investigation, he goes before the television microphones and says, 'I don't have a case, I don't have a report to send up to Congress.' ",
   "surface": "no one (that I know) wants to see the president of the United States impeached",
   "inverse": "not all (that I know) want to see the president of the United States impeached",
   "uniqueID": 287
 },
 {
   "pre_formatted": "And people with children with Tourette's keep indicating to me that a lot of the behavior that we're seeing is not normally associated with Tourette's. It's @ @ @ @ @ @ @ @ @ @ a lot of the questions coming up have to que -- they're questioning is the medicine that Robbie is taking properly -- properly aligned or -- or diagnosed. And I guess that's -- kind of summarizes it. We're just really concerned that ",
   "match": "everything is not the way it should be",
   "post_formatted": ". It's a behavior problem. ",
   "surface": "nothing is the way it should be",
   "inverse": "not all things are the way they should be",
   "uniqueID": 288
 },
 {
   "pre_formatted": "And I was just horrified \n@!ADAMS Was this sort of a -- what happens physically at that moment when you have this ... \nGORKA: It was a shock. I felt like, well, I wouldn't be surprised if the building went away or the earth opened up and ",
   "match": "everything else that I had depended on was not there anymore",
   "post_formatted": ". I felt like anything could happen at that point",
   "surface": "nothing else (that I had depended on) was there anymore",
   "inverse": "not all things else (that I had depended on) were there anymore",
   "uniqueID": 289
 },
 {
   "pre_formatted": "I mean, Orrin Hatch is right, and Pat Leahy is, that they're -- quite frankly, they're not coming to a vote. \n@!KATE-O'BEIRNE: I agree with Mark that Congress has exacerbated the problem by federalizing crimes on their law and order kick, and that has contributed to more federal cases, before the federal bench; however, it would be perfectly appropriate for Justice Rehnquist not to be criticizing Congress, except on that ground, because I agree, they shouldn't be federalizing crimes, many more crimes, but instead to talk to his fellow lifetime appointees and say let's show some self-restraint. @ @ @ @ @ @ @ @ @ @ as the court of first resort if you disagree with the commencement speech, you don't go to your state Department of Education director; you don't go to the principal or school board; you go straight to federal court. And if federal judges showed some restraint and weren't hearing all of those cases -- every court -- ",
   "match": "every case is not Brown vs. Board of Education --",
   "post_formatted": "\n@!JIM-LEHRER: Right. ",
   "surface": "none are Brown vs. Board of Education --",
   "inverse": "not all are Brown vs. Board of Education --",
   "uniqueID": 290
 },
 {
   "pre_formatted": "Do we fail to see how often that that doesn't translate to voting for a Democrat, even if you answer to the pollster: yeah, I think the Democrats do this and this in this and this -- that it doesn't necessarily mean that you're going to go in in November and pull for a Democrat? \nHORWICH: Absolutely. I think that when you see those national polls, what it doesn't necessarily show is that people generally like their incumbent. And they think that everybody else in Congress is crooked or ",
   "match": "[everybody else in Congress is] not doing a good job",
   "post_formatted": ". But they like the person who represents them. ",
   "surface": "nobody else (in Congress) is doing a good job",
   "inverse": "not all else (in Congress) are doing a good job",
   "uniqueID": 291
 },
 {
   "pre_formatted": " @!BARBARA-WALTERS: You are about to meet one of the most beautiful women in the world. She is a top fashion model, but she has a dark and devastating secret to reveal. We all know that fashion magazines are full of fantasy and illusion, but you might be surprised to see how far the pictures can be from the truth. Perri Peltz has the inside story of woman who looks ideal ... \n@(Voiceover) ... but ",
   "match": "everything is not what it seems",
   "post_formatted": ". \n@(Magazines) \n@!PERRI-PELTZ-report: @(Voiceover) Her face has graced the covers of dozens of fashion magazines. ",
   "surface": "nothing is what it seems",
   "inverse": "not all things are what they seem",
   "uniqueID": 292
 },
 {
   "pre_formatted": "What's your response to that criticism? \n@!Mr-SHOELS: Well, my response to that is that, you know, we was -- you know, we was part of that community. We felt very highly. Now all of Littleton -- I mean, all of that community is not in that s -- sickly @ @ @ @ @ @ @ @ @ @ the reason I say that is because ",
   "match": "everyone did not vandalize our house three times before the shooting",
   "post_formatted": ". I mean, you know, under these circumstances, I mean, you know, it's kind of hard to be -- you know, feel like you're part of a community and, you know, these type things are happening. ",
   "surface": "no one vandalized our house three times before the shooting",
   "inverse": "not all vandalized our house three times before the shooting",
   "uniqueID": 293
 },
 {
   "pre_formatted": "He believed in competence, that sort of thing. And then Lee Atwater went after him, and he became a liberal, liberal, liberal in the minds of Americans. So I -- you know, it's not -- you know, it doesn't follow. I mean, ",
   "match": "everything is not the same as everything else by any stretch of the imagination",
   "post_formatted": ", but I would certainly think that that -- that if I were running the Gore campaign, I would be wanting to try that one out. \n@!CRIER: Andy, any sense at all -- we 've got about 30 seconds -- how this \"compassionate conservatism\" is playing?",
   "surface": "nothing is the same as everything else by any stretch of the imagination",
   "inverse": "not all things are the same as everything else by any stretch of the imagination",
   "uniqueID": 294
 },
 {
   "pre_formatted": "The one in 1998 had similar ineptitude, and this one -- most of the stories have been about his advisors. I mean, Naomi Wolf is the least of it, except for the price that they paid for her. But, you know, one tobacco advisor, another who has left Congress in a cloud. I mean, it seems like everything is about his advisors and ",
   "match": "[everything is] not [about] Al Gore",
   "post_formatted": ". \n@!MR-RUSSERT: John McCain has a temper, Doris Kearns Goodwin? ",
   "surface": "nothing is about Al Gore",
   "inverse": "not all things are about Al Gore",
   "uniqueID": 295
 },
 {
   "pre_formatted": " @!Mr-FLORIO: Mm-hmm. Right. \n@!PRESSMAN: ... and denied -- said that he never advocated privatizing Social Security. \n@!Mr-FLORIO: Well, he -- he has said that he wants to put everything on the table, and that's an important issue because ",
   "match": "everything should not be on the table",
   "post_formatted": ". This should be a universal system. ",
   "surface": "nothing should be on the table",
   "inverse": "not all things should be on the table",
   "uniqueID": 296
 },
 {
   "pre_formatted": "And it has been reported all over the world as a landmark -- why is it landmark, because six people in Florida made this decision? \n@!CLARK-FRESHMAN: Well, it is going to cost potentially, billions and billions of dollars. In most cases, you would have one or two plaintiffs, perhaps a group of plaintiffs bringing the case and then if there was a loss, it was what their particular medical damages were, their loss of income. What this has done is to say if this is upheld on appeal or if this settles, which I think is quite likely, that ",
   "match": "everyone in the state of Florida up until now who has been damaged will not have to hire their own expert witnesses",
   "post_formatted": ", will not have to go mano-a-mano against the tobacco companies and prove that smoking causes cancer. All they'll have to do is show what their particular medical expenses and out-of-pocket @ @ @ @ @ @ @ @ @ @ floodgates here in Miami.",
   "surface": "no one (in the state of Florida up until now who has been damaged) will have to hire their own expert witnesses",
   "inverse": "not all (in the state of Florida up until now who have been damaged) will have to hire their own expert witnesses",
   "uniqueID": 297
 },
 {
   "pre_formatted": "And it has been reported all over the world as a landmark -- why is it landmark, because six people in Florida made this decision? \n@!CLARK-FRESHMAN: Well, it is going to cost potentially, billions and billions of dollars. In most cases, you would have one or two plaintiffs, perhaps a group of plaintiffs bringing the case and then if there was a loss, it was what their particular medical damages were, their loss of income. What this has done is to say if this is upheld on appeal or if this settles, which I think is quite likely, that everyone in the state of Florida up until now who has been damaged will not have to hire their own expert witnesses, ",
   "match": "[everyone in the state of Florida up until now who has been damaged] will not have to go mano-a-mano against the tobacco companies and prove that smoking causes cancer",
   "post_formatted": ". All they'll have to do is show what their particular medical expenses and out- of-pocket @ @ @ @ @ @ @ @ @ @ floodgates here in Miami. ",
   "surface": "no one (in the state of Florida up until now who has been damaged) will have to go mano-a-mano against the tobacco companies and prove that smoking causes cancer",
   "inverse": "not all (in the state of Florida up until now who have been damaged) will have to go mano-a-mano against the tobacco companies and prove that smoking causes cancer",
   "uniqueID": 298
 },
 {
   "pre_formatted": "Right now prosecutors in L.A. are trying to figure out how many people were framed or beaten or shot, how many people have been sent to jail wrongly, how many laws the police broke to fight a nasty @ @ @ @ @ @ @ @ @ @ And for the rest of us this question, not could it happen anywhere, but is it happening to one degree or another everywhere? We begin in Los Angeles tonight with ABC's Judy Muller. \nJUDY MULLER, ABC News: ( voice-over ) At today's police academy graduation in Los Angeles, some words of warning from the chief. \nChief BERNARD PARKS, Los Angeles Police Department: ",
   "match": "Every officer that we know of that has gone bad in the past did not start off walking into a bank and robbing it of $720,000 or going into a property room and stealing six pounds of cocaine",
   "post_formatted": ". They started off with small things. ",
   "surface": "none (that we know of that have gone bad in the past) started off walking into a bank and robbing it of $720,000 or going into a property room and stealing six pounds of cocaine",
   "inverse": "not all (that we know of that have gone bad in the past) started off walking into a bank and robbing it of $720,000 or going into a property room and stealing six pounds of cocaine",
   "uniqueID": 299
 },
 {
   "pre_formatted": " @!MARK-PHILLIPS-repo: @(Voiceover) Surely, if anyone can teach us how to live in a sex-obsessed society, it's the French. While they don't actually claim to have invented sex here, they do like to think they know more about it than we do. Well, maybe. But in the land that invented the French kiss, ",
   "match": "everything is not always what it seems",
   "post_formatted": ". Some of the French, in fact, have forgotten how to be lovers. ",
   "surface": "nothing is always what it seems",
   "inverse": "not all things are always what they seem",
   "uniqueID": 300
 },
 {
   "pre_formatted": "But on the whole, they seem to have represented extremes, because when Jefferson took office -- and one would hope that this might be a model to whoever takes office on January 20 -- he made an absolutely wonderful inaugural address, in which he said, 'Look' -- the words are his -- 'we are all Republicans, we are all Federalists,' by which he meant that the Republicans didn't really want to pull apart the union, and the Federalists didn't really want to reinstall the monarchy. He said, 'We are one people. We have a wonderful future ahead of us, a great continent. @ @ @ @ @ @ @ @ @ @ but ",
   "match": "every difference of opinion is not a difference of principle",
   "post_formatted": ". We have called brethren by different names. ",
   "surface": "none are a difference of principle",
   "inverse": "not all are a difference of principle",
   "uniqueID": 301
 },
 {
   "pre_formatted": "Instead, he badmouths people, insults people, and has a crass attitude toward anyone who has got problems, or is weaker than he is as a governor and a wrestler. And I do @ @ @ @ @ @ @ @ @ @ money from it. I think it's unethical. \n@!MAN: ",
   "match": "Everything I've heard him say has not been ... Good",
   "post_formatted": ", you know, hasn't been right. \n@!MAN: I personally don't think he's taken much time to be governor. ",
   "surface": "nothing (that I've heard him say) has been good",
   "inverse": "not all things (that I've heard him say) have been good",
   "uniqueID": 302
 },
 {
   "pre_formatted": "Instead, he badmouths people, insults people, and has a crass attitude toward anyone who has got problems, or is weaker than he is as a governor and a wrestler. And I do @ @ @ @ @ @ @ @ @ @ money from it. I think it's unethical. \n@!MAN: Everything I've heard him say has not been ... good, you know, ",
   "match": "[everything I've heard him say] hasn't been right",
   "post_formatted": ". \n@!MAN: I personally don't think he's taken much time to be governor. ",
   "surface": "nothing (that I've heard him say) has been right",
   "inverse": "not all things (that I've heard him say) have been right",
   "uniqueID": 303
 },
 {
   "pre_formatted": " @!Mr-HICKEY: Sure. I remember my car running out of gas when I was a student. I -- you know, we've heard anecdotal stories of people putting their college tuition money in, taking those kinds of risks here. I think it's -- if it was true that ",
   "match": "everyone was not taking risks",
   "post_formatted": " and was just putting a little bit of money into the stock market, then everything would @ @ @ @ @ @ @ @ @ @ the case. \nMcCHESNEY: Do you think that seeing the air let of tires of some of the -- I think the most vulnerable stocks, as I understand it, in this situation are the what we call business-to-consumer Internet commerce stocks, selling everything from cars to kitchen sinks on the Internet.",
   "surface": "no one was taking risks",
   "inverse": "not all were taking risks",
   "uniqueID": 304
 },
 {
   "pre_formatted": "He told one of his friends, when he subsequently did return, that he decided that he missed the bright lights of Broadway @ @ @ @ @ @ @ @ @ @ And yet he fantasied about a north that didn't exist when he was in New York. He fantasied about an America that didn't exist when he was back in Greenland. ",
   "match": "Everywhere he wandered was not the place he ultimately wanted to be",
   "post_formatted": ". Where did he end up? ",
   "surface": "no place (where he wandered) was the place he ultimately wanted to be",
   "inverse": "not all the places (where he wandered) were the places he ultimately wanted to be",
   "uniqueID": 305
 },
 {
   "pre_formatted": "STEPANEK: Yes, I think so, especially now when we're seeing the proliferation in the use of the Web and longer and longer work hours, which necessitate, for example, my using the Web to make a doctor's appointment or my wanting to notify my husband to pick up some milk on the way home from work and so on and so forth. While these things are not very objectionable, they are very much personal and not related to @ @ @ @ @ @ @ @ @ @ that are encouraging and, in fact, some that even fund additional ISP access to their workers. For example, you can have an AOL account and then your Business Week account, for example. And ",
   "match": "everything that goes through your AOL account is not to be monitored",
   "post_formatted": ", but everything on your Business Week account is. One is private.",
   "surface": "nothing (that goes through your AOL account) is to be monitored",
   "inverse": "not all things (that go through your AOL account) are to be monitored",
   "uniqueID": 306
 },
 {
   "pre_formatted": " @!KING Hi \n@!CALLER Drew, you are by far the sexiest man on television \n@!CAREY God bless you \n@!CALLER But the question I have @ @ @ @ @ @ @ @ @ @ ... \"Whose Line\" is so great because my -- the whole family watches it, and the kids just absolutely think it's wonderful and -- ",
   "match": "is everything truly not scripted",
   "post_formatted": "? \nCAREY: It's all made up. ",
   "surface": "is nothing truly scripted",
   "inverse": "are not all things truly scripted",
   "uniqueID": 307
 },
 {
   "pre_formatted": "And our young people, they are not cynical. They are not sitting home @ @ @ @ @ @ @ @ @ @ care about the future of your country, don't you? Yes, you do. And ",
   "match": "everybody is not sitting home waiting for some pollster to call",
   "post_formatted": ", right? You care about this country because you love this country, you know what works best for this country, you know that we are on the right track in this country, and it makes a difference who you elect.",
   "surface": "nobody is sitting home waiting for some pollster to call",
   "inverse": "not all are sitting home waiting for some pollster to call",
   "uniqueID": 308
 },
 {
   "pre_formatted": "He thinks he's normal. If you're going to fake it, you're not going to lie about having the negative aspects. \n@!STAHL-@1voice-over: And she says he can seem normal. \n@!RYAN: Almost ",
   "match": "everything he tells me is not true",
   "post_formatted": ", but it sounds very normal sometimes.  Like, he'll tell me about his mother having a breast cancer operation a month ago.",
   "surface": "nothing (that he tells me) is true",
   "inverse": "not all things (that he tells me) are true",
   "uniqueID": 309
 },
 {
   "pre_formatted": "DONALD-RUMSFELD-S: And Mr. Chairman, we need every nickel of it. The budget request does not solve the problems of the department. It begins to repair the damage thats been done by a long period of underfunding and overuse. \n@!SEN-ERNEST-HOLLING: You're saying every nickel is needed, but you can tell from the questioning ",
   "match": "everybody is not going to vote for every nickel",
   "post_formatted": ". \n@!MARTIN-@1on-camera: The Bush administration came into office vowing to transform the armed services, but so far, it looks very much like the same old military with the same old strategy and the same old complaints about too many missions and not enough money.",
   "surface": "nobody is going to vote for every nickel",
   "inverse": "not all are going to vote for every nickel",
   "uniqueID": 310
 },
 {
   "pre_formatted": " @!DR-SHARADA-JAIN: The doctors feel that the government machinery works so slow -- so slow -- that nobody can touch them and that's why probably the fear complex is not there with them. And if one or two is cornered, the media publicizes it, something can be done about it. \n@!FRED-DE-SAM-LAZARO: Early in May, India's supreme court did, in fact, order the government to step up its enforcement of the anti-sex determination law, something that even Dr. Kakodkar supports if it is done properly, he says. \n@!PRAKASH-KADKOKAR: If it's uniform, I mean, ",
   "match": "everybody is not going to do it",
   "post_formatted": ", then it's a different story. So unless the government really puts its, you know, foot down and decides to, you know, act really tough with people who are doing this, I don't think there is @ @ @ @ @ @ @ @ @ @",
   "surface": "nobody is going to do it",
   "inverse": "not all are going to do it",
   "uniqueID": 311
 },
 {
   "pre_formatted": "It's in its brain, in its spinal cord and some other tissues of its central nervous system. If you can prevent those parts of an animal from getting to other animals, you can prevent the spread of the disease. Here in the United States, the most important thing we have for stopping the spread of the disease is a ban that was put in place by the Food and Drug Administration back in 1997 on practices that could spread those parts from a sick cow to other cows. Now we know that that system doesn't work perfectly, and we know that ",
   "match": "everybody's not doing the best job they could complying with those rules",
   "post_formatted": ". But even with incomplete compliance, our study @ @ @ @ @ @ @ @ @ @ United States. ",
   "surface": "nobody is doing the best job they could complying with those rules",
   "inverse": "not all are doing the best job they could complying with those rules",
   "uniqueID": 312
 },
 {
   "pre_formatted": "You are the man! You are the man! Springer is down! \nUNIDENTIFIED MALE: I felt that I let them down by doing that, and just ",
   "match": "everything was not going according to the plan",
   "post_formatted": "\n@!MCINTYRE When get the ladder open, they discover it's too short. ",
   "surface": "nothing was going according to the plan",
   "inverse": "not all things were going according to the plan",
   "uniqueID": 313
 },
 {
   "pre_formatted": "Death is a subject Whedon tackles often, but one of the things he does from time to time in \"Buffy\" and in \"Angel\" is to kill off very @ @ @ @ @ @ @ @ @ @ mom and Willow's girlfriend, Tara. I asked him why he does that. \n@!Mr-WHEDON: Well, I do it because I want to keep people afraid, I want to keep people in suspense. I want people to understand that ",
   "match": "everything is not perfectly safe",
   "post_formatted": ". The problem with doing a horror show on television is that you know your main characters are coming back week to week, and you don't really care about, you know, somebody who just showed up for one episode. ",
   "surface": "nothing is perfectly safe",
   "inverse": "not all things are perfectly safe",
   "uniqueID": 314
 },
 {
   "pre_formatted": "You heard, 'Everybody talks about it. Everybody's doing it. Everybody thinks it's OK.' First off, ",
   "match": "everybody's not doing it",
   "post_formatted": ", and the ones who aren't are looking at -- at these people like they've lost their minds. And you've got to understand that if kids feel special at home, they will set high standards out in the world.",
   "surface": "nobody is doing it",
   "inverse": "not all are doing it",
   "uniqueID": 315
 },
 {
   "pre_formatted": "But the country has been torn by war. Schools have been corrupted and closed @ @ @ @ @ @ @ @ @ @ been scared to be curious. The capital is still beset by shortages and gloom. \n@!Mr-RAHEEN: After 23 years of disastrous situation, ",
   "match": "everything will not be OK over the night",
   "post_formatted": ". \n@!SIMON: I mean, speaking of the night as we're speaking the lights just went off. ",
   "surface": "nothing will be OK over the night",
   "inverse": "not all things will be OK over the night",
   "uniqueID": 316
 },
 {
   "pre_formatted": "They'd love to be able run on the economy against President Bush in the midterm elections. But poll after poll shows that the American people don't blame this president for the economic downturn. I'm sure the White House is very happy about that. ",
   "match": "Everything they've thrown out to the administration so far -- and they shouldn't get cocky -- has not worked",
   "post_formatted": ". They have not been able to get traction. ",
   "surface": "nothing (that they've thrown out to the administration so far) has worked",
   "inverse": "not all things (that they've thrown out to the administration so far) have worked",
   "uniqueID": 317
 },
 {
   "pre_formatted": " @!MACVICAR By now we all know what it looks like. Israel has been left on the defensive. \nCOL. MIRI EISEN, ISRAELI MILITARY INTELLIGENCE: Israel is not here standing and saying, Whoa, everything [is] hunky-dory. ",
   "match": "Everything's not hunky-dory",
   "post_formatted": ". Bad things happened",
   "surface": "nothing is hunky-dory",
   "inverse": "not all things are hunky-dory",
   "uniqueID": 318
 },
 {
   "pre_formatted": "O'REILLY: No, I know. There are social injustices. Look, any ... \n@!WHITE: Right. \nO'REILLY: ... clear-thinking American knows ... \n@!WHITE: So ",
   "match": "everybody is not given an opportunity",
   "post_formatted": ". \nO'REILLY: Any clear-thinking American knows it's much harder for African-Americans to make it in the USA than it is for whites @ @ @ @ @ @ @ @ @ @ it can be done. ",
   "surface": "nobody is given an opportunity",
   "inverse": "not all are given an opportunity",
   "uniqueID": 319
 },
 {
   "pre_formatted": "So if you're staying up late at night worrying about the debt ceiling, let me put you at ease. Not to worry. \n@!WILLIAMS: In other words, the fact that the government just keeps spending and spending and spending and everybody is worried about the amount of this expense ... \n@!HUME: ",
   "match": "Everybody's not",
   "post_formatted": ". \n@!WILLIAMS: The fact that President Clinton left a surplus and we now have a huge deficit ... ",
   "surface": "nobody is",
   "inverse": "not all are",
   "uniqueID": 320
 },
 {
   "pre_formatted": "There are no aspects of it @ @ @ @ @ @ @ @ @ @ the crime happened and all those very specific things are disproven. \nMORIARTY: For example, Marty told police that he used a barbell and a kitchen knife as murder weapons, but not a trace of blood was found -- even when they were microscopically examined. \nLead detective James McCready: @(on-camera): If he cleaned off the weapons, why wasn't any blood found in the plumbing? \n@!MCCREADY: ",
   "match": "Every confession does not have 100 percent of the truth in it",
   "post_formatted": ", because they don't give you the whole truth. \n@!MORIARTY-@1voice-o: The forensics team found bloody glove prints at the scene, but Marty never mentioned wearing gloves, and those gloves were never found. ",
   "surface": "none have 100 percent of the truth in them",
   "inverse": "not all have 100 percent of the truth in them",
   "uniqueID": 321
 },
 {
   "pre_formatted": " @!Dr-SPIEGEL: A little bit skeptical. Fine. Fine. \n@!BRAVER: @(Voiceover) I knew that ",
   "match": "everyone is not hypnotizable",
   "post_formatted": ", but after a short test ... \n@!Dr-SPIEGEL: Do you tend to live more in the past, the present, the future or all three? ",
   "surface": "no one is hypnotizable",
   "inverse": "not all are hypnotizable",
   "uniqueID": 322
 },
 {
   "pre_formatted": " @!Mr-MANILOW: Not when I play it. \n@!GROSS: Not when you played it. The whole \" Lady Of Spain \" bit? \n@!Mr-MANILOW: Yeah, I think ",
   "match": "every Jewish and Italian boy can not get out of Brooklyn, New York",
   "post_formatted": ", unless he learns how to play the accordion. There's a guard at the Brooklyn Bridge and @ @ @ @ @ @ @ @ @ @ you can go over the bridge.",
   "surface": "none can get out of Brooklyn, New York",
   "inverse": "not all can get out of Brooklyn, New York",
   "uniqueID": 323
 },
 {
   "pre_formatted": "But the question of whether the THTs are sufficiently prepared for the missions they face in Iraq has gotten high-level attention. A report from the Army's Joint Readiness Training Center last fall concluded that poorly trained or weak human team @ @ @ @ @ @ @ @ @ @ The Army report also concluded that what good intelligence the human teams did collect was not always well used by the commanders to whom it was given. Former human team leader David DeBatto agrees. \n@!Mr-DeBATTO: ",
   "match": "Everywhere from the lower echelon commanders all the way up to the corps and headquarters level officers really did not have a firm understanding of what the human resources could offer to them",
   "post_formatted": ". So very, very often, the information that we compiled and sent up the chain of command was never used, and that did create a lot of frustration among the human teams. ",
   "surface": "no sector (from the lower echelon commanders all the way up to the corps and headquarters level officers) really had a firm understanding of what the human resources could offer to them",
   "inverse": "not all sectors (from the lower echelon commanders all the way up to the corps and headquarters level officers) really had a firm understanding of what the human resources could offer to them",
   "uniqueID": 324
 },
 {
   "pre_formatted": " @!Prof-WINEGARDNER: Mm-hmm, sure. \n@!SIMON: How do you handle that question? \n@!Prof-WINEGARDNER: Well, the idea that you write about something and therefore that means that you're saying that everybody is like this. No, ",
   "match": "everyone's not like this",
   "post_formatted": ". That's why it's a book. ",
   "surface": "no one is like this",
   "inverse": "not all are like this",
   "uniqueID": 325
 },
 {
   "pre_formatted": " @!MATTHEWS Forget the management. Theyre all big shots \n@!BLAIR No. \n( CROSSTALK ) \nMATTHEWS: ",
   "match": "Everybody in this -- in the Manhattan world right now is not a rich guy",
   "post_formatted": ". They're not some snot.",
   "surface": "nobody (in the Manhattan world right now) is a rich guy",
   "inverse": "not all (in the Manhattan world right now) are rich guys",
   "uniqueID": 326
 },
 {
   "pre_formatted": "She's live in Biloxi, Mississippi, kind of on the outer edge of the storm, but still experiencing some flooding there -- good morning, Susan. \nSUSAN CANDIOTTI, CNN CORRESPONDENT: Good morning to you, Carol. Yes, people here feel very, very fortunate to find themselves on the west side of the storm, the weaker side of the storm here. And authorities still very happy, nevertheless, that they moved everyone to higher ground, ordered those mandatory evacuations, even though ",
   "match": "everybody did not follow them",
   "post_formatted": ". We're happy to report to you, I @ @ @ @ @ @ @ @ @ @ ",
   "surface": "nobody followed them",
   "inverse": "not all followed them",
   "uniqueID": 327
 },
 {
   "pre_formatted": " @!KING Annette, Louisiana, hello \n@!CALLER Hi. My question for Mr. Eisner was, MGM is one of my favorite places in Disneyworld and one of my favorite attractions there is the animation studios, and now the studio, the animation studio there is closed, and everything has moved to California, and I wanted to know how you justified doing that \n@!EISNER Well, ",
   "match": "everything has not moved to California",
   "post_formatted": ". We will still be demonstrating animation in Florida. ",
   "surface": "nothing has moved to California",
   "inverse": "not all things have moved to California",
   "uniqueID": 328
 },
 {
   "pre_formatted": "You know I've got the smallest ( UNINTELLIGIBLE ) in the world \n@!KING So accept what life gave you? \nOSBOURNE: Accept it and move on, you know. It -- ",
   "match": "everything in life can not be perfect",
   "post_formatted": ". Nobody's life is perfect",
   "surface": "nothing (in life) can be perfect",
   "inverse": "not all things (in life) can be perfect",
   "uniqueID": 329
 },
 {
   "pre_formatted": " @!LEIBOVICH Thank you, Lisa. I think I'm the journalistic equivalent of Hunt's ketchup in the Heinz circle. But I think that, yes, there are going to be certain stories that campaigns don't like and the subjects don't like. I mean @ @ @ @ @ @ @ @ @ @'s -- you know, ",
   "match": "everyone who came after Mark to profile Teresa did not expect her to be as forthcoming",
   "post_formatted": " because of the, you know ... \nKURTZ: Figuring that she would be gun shy ",
   "surface": "no one (who came after Mark to profile Teresa) expected her to be as forthcoming",
   "inverse": "not all (who came after Mark to profile Teresa) expected her to be as forthcoming",
   "uniqueID": 330
 },
 {
   "pre_formatted": " @!PLANTE But let me remind you of one thing here. @ @ @ @ @ @ @ @ @ @ president. Not all will choose to have the grand state funeral, the lying in state, the funeral at the National Cathedral. Any president can have that \n@!KURTZ But ",
   "match": "every president can not necessarily have a week of wall to wall coverage",
   "post_formatted": ". Jimmy Carter or Gerald Ford dies -- and I hope that doesn't happen ... \nPLANTE: No ",
   "surface": "none can necessarily have a week of wall to wall coverage",
   "inverse": "not all can necessarily have a week of wall to wall coverage",
   "uniqueID": 331
 },
 {
   "pre_formatted": "Plus Hurricane Wilma provided some memorable images in Florida today. We'll show you some of the most dramatic video coming up on \"Hannity and Colmes.\" \n@(BEGIN-VIDEO-CLIP) \n@!UNIDENTIFIED-MALE: We're trying to keep our eyes open here for debris flying at us. But ",
   "match": "everything is not tied down",
   "post_formatted": " @ @ @ @ @ @ @ @ @ @ churned up like a washing machine out there and a lot of the water is coming up over and onto the main street over here. \n@(END-VIDEO-CLIP) \n@!HANNITY: A piece from the \"Hannity &amp; Colmes\" notebook. ",
   "surface": "nothing is tied down",
   "inverse": "not all things are tied down",
   "uniqueID": 332
 },
 {
   "pre_formatted": "Here @ @ @ @ @ @ @ @ @ @ moment in the ABC coverage was when Ted Koppel, who as - who as anchoring the president's speech, when to Dean Reynolds in the parking lot of the Houston Astrodome. He had assembled 10 African-American evacuees from New Orleans. He asked each one of them what they thought of the Bush speech. Every one of them liked it, every one said they had faith in Bush, ",
   "match": "every one would not criticize",
   "post_formatted": ". You could just see the sweat breaking out on his brow. ",
   "surface": "none would criticize",
   "inverse": "not all would criticize",
   "uniqueID": 333
 },
 {
   "pre_formatted": " @!JERRY-NADEAU-NASC: I had to relearn how to walk, I had to relearn how to talk. I didn't say anything for a while. I was always thinking, when is this light switch going to turn on and everything will be perfect? \n@!GUPTA: ",
   "match": "Everything is still not perfect",
   "post_formatted": ". \n@!NADEAU: My left side is basically tingling, like it's asleep, 24 hours a day. ",
   "surface": "nothing is perfect still",
   "inverse": "not all things are perfect still",
   "uniqueID": 334
 },
 {
   "pre_formatted": "UNIDENTIFIED MALE: I hope so. Yes. \nUNIDENTIFIED MALE: This @ @ @ @ @ @ @ @ @ @ Yes. \n( END VIDEO CLIP ) \nABRAMS: Well, apparently, ",
   "match": "everything did not go as plan[ned]",
   "post_formatted": ". That was Lillo Brancato Jr., co-star of \"A Bronx Tale\" in an interview promoting the movie back in 93, he was sure of his path then, but now he's waiting to be charged with the murder of New York City police officer Daniel Enchautegui, fatally shot early Saturday morning after responding off duty to a robbery in at a neighboring house.",
   "surface": "nothing went as planned",
   "inverse": "not all things went as planned",
   "uniqueID": 335
 },
 {
   "pre_formatted": "No. But everybody is doing that. There are people who are collecting speaking fees all over the country. \n@!SCARBOROUGH ",
   "match": "Everybody is not doing that",
   "post_formatted": ". \nCHERI JACOBUS, REPUBLICAN STRATEGIST: Joe",
   "surface": "nobody is doing that",
   "inverse": "not all are doing that",
   "uniqueID": 336
 },
 {
   "pre_formatted": "SCARBOROUGH: I go to your newspaper. I write supporting a proposal. If @ @ @ @ @ @ @ @ @ @ off to write this proposal, that is unethical. ",
   "match": "Everybody is not doing it",
   "post_formatted": ". \n( CROSSTALK ) \nZUCKERMAN: Even if youre an opinion writer, a columnist, you would like to know as a reader that the opinions comes from your opinions and not because you are motivated by the money that youre being paid by �",
   "surface": "nobody is doing it",
   "inverse": "not all are doing it",
   "uniqueID": 337
 },
 {
   "pre_formatted": "And people that watch this show know @ @ @ @ @ @ @ @ @ @ I do it because thats what I believe, not because I am getting paid under the table. And, Jack Burkman, you have made my point tonight. And that is that everybody out there is saying, everybody does it. ",
   "match": "Everybody is not doing it",
   "post_formatted": ". \nJACOBUS: I don't think everybody is doing it",
   "surface": "nobody is doing it",
   "inverse": "not all are doing it",
   "uniqueID": 338
 },
 {
   "pre_formatted": "JEANNE MESERVE, CNN HOMELAND SECURITY CORRESPONDENT ( voice-over ): Anderson, we don't know if they were the fattest of the fat cats, but some people apparently did find out early. The Department of Homeland Security is investigating two e-mails that outline the threat to New York City transit, both sent before the threat @ @ @ @ @ @ @ @ @ @ Mayor Michael Bloomberg had even been briefed. \"As some of you may know, my father works for Homeland Security at a very high position and receives security briefings on a daily basis,\" the first e-mail reads. \"The only information that I can pass on is that ",
   "match": "everyone should at all costs not ride the subway for the next two weeks",
   "post_formatted": ".\" That e-mail is dated 6:05 p.m., October 3rd, about an hour-and-a-half before the mayor had been filled in. ",
   "surface": "no one should at all costs ride the subway for the next two weeks",
   "inverse": "not all should at all costs ride the subway for the next two weeks",
   "uniqueID": 339
 },
 {
   "pre_formatted": "The president to come forward making a brief statement, and then on, hopefully, they try to business as usual -- \nLou @!DOBBS This approach, this strategy, as you report @ @ @ @ @ @ @ @ @ @ difference in the atmosphere with you, Suzanne, for example, while you were at the White House? \nMALVEAUX: Well, what you feel a sense is that everyone is somewhat in this together because they're all waiting to see when the next shoe is to drop. You know that ",
   "match": "everybody simply is not able [to talk about it amongst each other]",
   "post_formatted": " or not allowed to talk about it amongst each other. We're asking lots of questions, and people get a sense of anxiety and tension about that. ",
   "surface": "nobody simply is able to talk about it amongst each other",
   "inverse": "not all simply are able to talk about it amongst each other",
   "uniqueID": 340
 },
 {
   "pre_formatted": "The president to come forward making a brief statement, and then on, hopefully, they try to business as usual -- \nLou @!DOBBS This approach, this strategy, as you report @ @ @ @ @ @ @ @ @ @ difference in the atmosphere with you, Suzanne, for example, while you were at the White House? \nMALVEAUX: Well, what you feel a sense is that everyone is somewhat in this together because they're all waiting to see when the next shoe is to drop. You know that everybody simply is not able or ",
   "match": "[everybody simply is] not allowed to talk about it amongst each other",
   "post_formatted": ". We're asking lots of questions, and people get a sense of anxiety and tension about that. ",
   "surface": "nobody simply is allowed to talk about it amongst each other",
   "inverse": "not all simply are allowed to talk about it amongst each other",
   "uniqueID": 341
 },
 {
   "pre_formatted": "I just put that in there so you can increase your speculation if you want. But never forget that sometimes somebody puts out somebody who is not really going to be the nominee just to deflect, just to obscure who it turns out to be. We'll see if that's the case. But, as you can see, the intrigue is running heavy at the White House as everybody's trying to grasp at straws and thus far ",
   "match": "[everybody 's] not even catching that",
   "post_formatted": ". \nDaryn @!KAGAN Bob Franken live at the White House. ",
   "surface": "nobody is even catching that",
   "inverse": "not all are even catching that",
   "uniqueID": 342
 },
 {
   "pre_formatted": "Here's the reality of it. You've got a president that's in the low 30s, maybe even at 29 percent. He is scrambling. ",
   "match": "Every president that's been down that low has not been able to recover in a short period of time this close to the midterms",
   "post_formatted": ". Every Republican senator is in trouble in the polls, and at least a push in the House. ",
   "surface": "none (that have been down that low) have been able to recover in a short period of time this close to the midterms",
   "inverse": "not all (that have been down that low) have been able to recover in a short period of time this close to the midterms",
   "uniqueID": 343
 },
 {
   "pre_formatted": " @!SANCHEZ: How did it do? Did you make some money? \n@!THOMPSON: @ @ @ @ @ @ @ @ @ @ know that money was raised for sure, but I wasn't directly raising money. So my main push is really just to get out there, and tell the nation that ",
   "match": "everything's not fixed on the Mississippi coast and also in New Orleans",
   "post_formatted": ". So, I don't really care who people give to or how they help. ",
   "surface": "nothing is fixed on the Mississippi coast and also in New Orleans",
   "inverse": "not all things are fixed on the Mississippi coast and also in New Orleans",
   "uniqueID": 344
 },
 {
   "pre_formatted": " @ @ @ @ @ @ @ @ @ @ I mean a lot of this stuff, plus ... \n@!Mr-HOCHMAN: That's right. \n@!HOLT: ... a portable printer and all this. I am still in search of a perfect bag that I can still get on the airplane ... \n@!Mr-HOCHMAN: Right. \n@!HOLT: ... get through security OK and make sure ",
   "match": "everything's not knocked around",
   "post_formatted": ". \n@!Mr-HOCHMAN: The average person carries along a camera and a phone and then now probably an MP3 player or an iPod, something like that. ",
   "surface": "nothing is knocked around",
   "inverse": "not all things are knocked around",
   "uniqueID": 345
 },
 {
   "pre_formatted": " @!BROWN: And you have that support system there that you might not otherwise. \n@!Mr-TORKELLS: Absolutely. \n@!BROWN: You've actually put together a list of tips for women who might want to try to put together a trip like this, or any trip like this, and the first thing you suggest is @ @ @ @ @ @ @ @ @ @ level when you're choosing something. \n@!Mr-TORKELLS: No one's going to have fun if ",
   "match": "everybody's not comfortable",
   "post_formatted": ". \n@!BROWN: Right. ",
   "surface": "nobody is comfortable",
   "inverse": "not all are comfortable",
   "uniqueID": 346
 },
 {
   "pre_formatted": "SCARBOROUGH: Yes, Katrina, I'll ask you the same thing. Do you think, if the infighting continues, it might drive viewers away from \"Idol\"? \nSZISH: Sure, if theres anything that you watch that starts out being a little bit kind of juicy and @ @ @ @ @ @ @ @ @ @ one of those scenarios. If they keep this same, old fighting shtick going on for too long, everyone's going to get sick of it and ",
   "match": "[everyone's going to] not want to hear about it anymore",
   "post_formatted": ", so they have to do the balance. \nSCARBOROUGH: And, Jim, I'll ask you the same thing. ",
   "surface": "no one is going to want to hear about it anymore",
   "inverse": "not all are going to want to hear about it anymore",
   "uniqueID": 347
 },
 {
   "pre_formatted": " @!VICKI-MABREY-@1ABC# @(Off-camera) But it's helping them to establish credit. Everyone needs to establish credit. \n@!PROFESSOR-ELIZABET# This is like in my top 10 myths. No, ",
   "match": "everyone does not need to establish credit by taking out a credit card",
   "post_formatted": ". Establish credit by paying your utility bill. ",
   "surface": "no one needs to establish credit by taking out a credit card",
   "inverse": "not all need to establish credit by taking out a credit card",
   "uniqueID": 348
 },
 {
   "pre_formatted": "Imam ALI: We have been called by the FBI national office, as well as field office, to join this meeting - regular meeting - in the field office in Washington, D.C. \n@!MARTIN: And this was after September 11th, yes? \nImam ALI: After September 11th, yes. \n@!MARTIN: Now, ",
   "match": "everybody might not be pleased to get a phone call from the FBI",
   "post_formatted": ", especially at a time of such national anxiety. How did you feel?",
   "surface": "nobody might be pleased to get a phone call from the FBI",
   "inverse": "not all might be pleased to get a phone call from the FBI",
   "uniqueID": 349
 },
 {
   "pre_formatted": "So my thing of it is, first of all, there's too many churches. There's far too many churches. And because there's too many churches, that brings about different views on different situations because you have different leaders that teach and preach different things. Because whether we know it or not, ",
   "match": "everybody is not preaching God's word the way they need to",
   "post_formatted": ". Everybody's not preaching, like you said, the golden rule. ",
   "surface": "nobody is preaching God's word the way they need to",
   "inverse": "not all are preaching God's word the way they need to",
   "uniqueID": 350
 },
 {
   "pre_formatted": "There's far too many churches. And because there's too many churches, that brings about different views on different situations because you have different leaders that teach and preach different things. Because whether we know it or not, everybody is not preaching God's word the way they need to. ",
   "match": "Everybody's not preaching, like you said, the golden rule",
   "post_formatted": ". \n@!NEARY: It sounds to me as if what is going on in Jena right now truly has ripped the community apart and maybe opened up wounds that have been there for a long time. ",
   "surface": "nobody is preaching, like you said, the golden rule",
   "inverse": "not all are preaching, like you said, the golden rule",
   "uniqueID": 351
 },
 {
   "pre_formatted": "Five o'clock by the refrigerator is where my kid was, and that's where I'd find myself. \n@!ROKER: You say also a great way to find time is eat more meals together. \n@!Ms-BORBA: Family dinners are wonderful. The problem is sometimes ",
   "match": "everybody's not there at the same time",
   "post_formatted": ". \n@!ROKER: Because of their after-school activities, homework, all that stuff. ",
   "surface": "nobody is there at the same time",
   "inverse": "not all are there at the same time",
   "uniqueID": 352
 },
 {
   "pre_formatted": "And I also think, and I mentioned before, that you have to care for that other person really more than you care for yourself. But you also have to be altruistic and empathetic and understand who they are. \n@!SNYDERMAN: But how do you also remain -- but how do you also remain realistic, that not everybody -- not every day is going to be a day in the park? \n@!Ms-ATKINS: Well, ",
   "match": "every day is not a day in the park",
   "post_formatted": ", and you know, marriage is really about the every day, the day to day and the details. \n@!Mr-KERNER: Yeah.",
   "surface": "none are a day in the park",
   "inverse": "not all are a day in the park",
   "uniqueID": 353
 },
 {
   "pre_formatted": "No Child Left Behind has some positive attributes, but it was an unfunded mandate in many key particulars. And I don't think anyone who works in low-income serving schools believes that we have highly-qualified teachers in many of these classrooms or other measures necessary to provide the quality education. So the first thing is we need @ @ @ @ @ @ @ @ @ @ the federal government, not only in setting standards, but in helping to provide financial resources so as to equalize moneys between and among states and, indeed, to assist in the equalization of resources within states. If we did that, at least we would have a baseline so that ",
   "match": "every child would not have an education dependent upon his or her social class",
   "post_formatted": ". \n@!CHIDEYA: Well, Lynn ... \n@!Ms-HUNTLEY: Secondly, we need to focus on dropout prevention. ",
   "surface": "none would have an education dependent upon his or her social class",
   "inverse": "not all would have an education dependent upon his or her social class",
   "uniqueID": 354
 },
 {
   "pre_formatted": "QUEEN-LATIFAH: They are the metaphor for many families. And I think, once again, I think it's @ @ @ @ @ @ @ @ @ @ guys may have different opinions on this, but for me, you know, when I watch a movie, I don't necessarily - I think everybody tries to see a little bit of themselves in a movie somewhere or someone that they know. If you can't relate to a lot of these characters then you just, you know, you might just be a different person, but you don't have to be one of them to enjoy the film. And I think that what's happening and what we're starting to see is that they're - well, for us, it's been about making films that are - that go to sort of middle of even African-Americans. ",
   "match": "Everything is not going to be about the hood and drugs and guns",
   "post_formatted": ". And I mean, we've seen that, we grew up in that, a lot of us. ",
   "surface": "nothing is going to be about the hood and drugs and guns",
   "inverse": "not all things are going to be about the hood and drugs and guns",
   "uniqueID": 355
 },
 {
   "pre_formatted": " @!LUNTZ: In what way? Explain it. \n@!VOICE: I want him to explain it. He is making it sound like ",
   "match": "everybody is not going to vote for Obama",
   "post_formatted": ". How does he know that? ",
   "surface": "nobody is going to vote for Obama",
   "inverse": "not all are going to vote for Obama",
   "uniqueID": 356
 },
 {
   "pre_formatted": "But, I mean, who's in favor of it? Nobody. And we have a law against torture. But if the -- ",
   "match": "everything that is hateful and odious is not covered by some provision of the Constitution",
   "post_formatted": ". \n@!STAHL: If someone's in custody, as in Abu Ghraib, and they are brutalized by a law enforcement person, if you listen to the expression, cruel and unusual punishment, doesn't that apply? ",
   "surface": "nothing (that is hateful and odious) is covered by some provision of the Constitution",
   "inverse": "not all things (that are hateful and odious) are covered by some provision of the Constitution",
   "uniqueID": 357
 },
 {
   "pre_formatted": "It is not to get a pat on the back, obviously. Most likely to get kicked in the behind, and that's the chance you take. You take a chance as - if, you're an editor of a magazine. I'm going to be provocative, I'm going to get people's attention, ",
   "match": "everybody's not going to agree",
   "post_formatted": ", but that's the whole idea in the first place. \n@!MARTIN: But isn't that - by that standard hasn't it succeeded, we're talking about it.",
   "surface": "nobody is going to agree",
   "inverse": "not all are going to agree",
   "uniqueID": 358
 },
 {
   "pre_formatted": " @!ELIZABETH-VARGAS-@# @(Voiceover) Did you anticipate that 6,000 kids would apply for 1,000 jobs? \n@!SARA-LEWIS-@1SPECI# Yes. \n@!ELIZABETH-VARGAS-@# @(Off-camera) Is the city doing all it can? \n@!SARA-LEWIS-@1SPECI# ",
   "match": "Every problem in America is not created by government",
   "post_formatted": ", and it can not and should not be solved by government. It just can not be, because government is becoming more and more massive and more and more expensive.",
   "surface": "none (in America) are created by government",
   "inverse": "not all (in America) are created by government",
   "uniqueID": 359
 },
 {
   "pre_formatted": " @!ELIZABETH-VARGAS-@# @(Voiceover) Did you anticipate that 6,000 kids would apply for 1,000 jobs? \n@!SARA-LEWIS-@1SPECI# Yes. \n@!ELIZABETH-VARGAS-@# @(Off-camera) Is the city doing all it can? \n@!SARA-LEWIS-@1SPECI# Every problem in America is not created by government, and ",
   "match": "[every problem in America] can not and should not be solved by government",
   "post_formatted": ". It just can not be, because government is becoming more and more massive and more and more expensive.",
   "surface": "none (in America) can and should be solved by government",
   "inverse": "not all (in America) can and should be solved by government",
   "uniqueID": 360
 },
 {
   "pre_formatted": " @!DOW: @(Voiceover) But there is one piece of the puzzle that could help the DA's case. Sources have told 48 HOURS that investigators discovered a large amount of cash in Paige's home, tens of thousands of dollars, believed to be from her escort business, something she would @ @ @ @ @ @ @ @ @ @ And everyone who knows Paige Birgfeld agrees on one thing, she would not have walked out on children. \n@!Mr-HAUTZINGER: And frankly, if I was trying this case now without a body, that would be the kind of evidence that I'd be really trying to rely on to persuade the jury she must be dead. \n@(Photos-of-Paige-wi) \n@!Mr-HAUTZINGER: @(Voiceover) Because everybody who knew her and her kids thought she was highly devoted to them and ",
   "match": "[everybody who knew her and her kids] can not conceive of her leaving her kids for any reason whatsoever",
   "post_formatted": ". \n@!DOW: If you never find a body, you're not going to press charges in this case? ",
   "surface": "nobody (who knew her and her kids) can conceive of her leaving her kids for any reason whatsoever",
   "inverse": "not all (who knew her and her kids) can conceive of her leaving her kids for any reason whatsoever",
   "uniqueID": 361
 },
 {
   "pre_formatted": "O'REILLY: You're a Republican. \n@!TANTAROS: Everything I'm telling him to do. \nO'REILLY: I just - here @ @ @ @ @ @ @ @ @ @. ",
   "match": "everything you're telling him to do is not doing",
   "post_formatted": ". \nO'REILLY : Either of these guys, if they're elected, gets these bad guys. ",
   "surface": "nothing (that you're telling him to do) is doing",
   "inverse": "not all things (that you're telling him to do) are doing",
   "uniqueID": 362
 },
 {
   "pre_formatted": "These preferreds in these banks are well protected, and I believe that will be a good investment. But what we've @ @ @ @ @ @ @ @ @ @, the best thing we can do is have additional money, ample additional money to continue to put equity into financial institutions, if needed, and also equity to put into institutions if theres a systemic event and there needs to be a rescue. And so what we said is we want to evaluate this first plan once its done and then determine the best way to go forward as needed with additional capital programs. \n@!JIM-LEHRER: But it is correct to say, is it not, Mr. Secretary, that ",
   "match": "everything that's been done up until now has not resulted in the kind of lending that this whole thing was designed to free",
   "post_formatted": "? \n@!HENRY-PAULSON-: I take big issue with that. ",
   "surface": "nothing (that's been done up until now) has resulted in the kind of lending that this whole thing was designed to free",
   "inverse": "not all things (that have been done up until now) have resulted in the kind of lending that this whole thing was designed to free",
   "uniqueID": 363
 },
 {
   "pre_formatted": " @!Rev-DYSON: There's no question that I struggled with it theologically. I suppose that I inherited the same vocabulary and world view as most black Christians do, most Christians in general, to be sure. It was heterosexist in the sense that it took the heterosexual orientation as the norm from which to start as the given. And ",
   "match": "everything that fell outside of that was not acceptable",
   "post_formatted": ". But as I began to dig deeper into the Scripture where I read, you @ @ @ @ @ @ @ @ @ @ soul, heart and mind. ",
   "surface": "nothing (that fell outside of that) was acceptable",
   "inverse": "not all things (that fell outside of that) were acceptable",
   "uniqueID": 364
 },
 {
   "pre_formatted": "And just because wages are stagnant, people don't think their lives should be. They wanted to continue to have a lifestyle that got better, and so they had to do it on credit. I mean, that's really what happened. You know, the idea that we could continue to have this disparity in wealth, where the rich got richer and ",
   "match": "everybody else did not advance at all",
   "post_formatted": ", that was always going to be a ship sailing toward an iceberg. If you look at the Bush recovery, you know, from 2002 to 2006, it's something like 800 billion something dollars increase in wealth, like three quarters of it went to the top one percent.",
   "surface": "nobody else advanced at all",
   "inverse": "not all else advanced at all",
   "uniqueID": 365
 },
 {
   "pre_formatted": "We all have addictions. If you're not addicted to alcohol, drugs, or food, or sugar, or sex, or youre codependent, or youre an enabler, or youre a gambler. Everybody is addicted to something, especially food in this country; obesity threatening to surpass smoking as the number one killer. \n@!BEHAR: Well, ",
   "match": "everybody is not addicted to ten things though",
   "post_formatted": ". You were. ",
   "surface": "nobody is addicted to ten things though",
   "inverse": "not all are addicted to ten things though",
   "uniqueID": 366
 },
 {
   "pre_formatted": "There are huge problems with this. These guys were not given their Miranda warnings. They were under enhanced interrogation. ",
   "match": "Everything that happened after that may not be admitted",
   "post_formatted": ". Holder says well, I have -- there's evidence that hasn't been made public that assures me that he'll get a conviction. ",
   "surface": "nothing (that happened after that) may be admitted",
   "inverse": "not all things (that happened after that) may be admitted",
   "uniqueID": 367
 },
 {
   "pre_formatted": " @!CHARLOTTE: He's escalating it, sir. He's escalating it. \n@!Dr-BRZEZINSKI: @ @ @ @ @ @ @ @ @ @'m trying to answer. And the question is how to end that war so that ",
   "match": "everyone will not be in greater jeopardy",
   "post_formatted": ". That is the issue. ",
   "surface": "no one will be in greater jeopardy",
   "inverse": "not all will be in greater jeopardy",
   "uniqueID": 368
 },
 {
   "pre_formatted": "They're not going to do it. They're stubborn. You know - and I say, you know, listen. ",
   "match": "Everybody's not going to do this fast at the same time",
   "post_formatted": ". People are going to start it at different periods of time. ",
   "surface": "nobody is going to do this fast at the same time",
   "inverse": "not all are going to do this fast at the same time",
   "uniqueID": 369
 },
 {
   "pre_formatted": " @!MORRISON: @(Voiceover) They had so much to look @ @ @ @ @ @ @ @ @ @ going to travel, spend time with the kids. And now he was gone. Back on the Oceanos, the airlift was moving as fast as it possibly could, but cruise director Lorraine Betts, megaphone in hand, could tell they were still losing the battle with time. \n@ ( Photo-of-Waltons; - \n@!Ms-BETTS: It was obvious that ",
   "match": "everybody was not going to make it in the helicopters",
   "post_formatted": ". So I said, Where's the other navy guy? ",
   "surface": "nobody was going to make it in the helicopters",
   "inverse": "not all were going to make it in the helicopters",
   "uniqueID": 370
 },
 {
   "pre_formatted": " @!MELISSA-RYCROFT-@1# We were so secluded, we actually missed the presidential election. Missed it all. We had a producer come in and tell us the next day who the president was. \n@!FORMER-CONTESTANT-# My personality is such where ",
   "match": "everybody does not have to like me",
   "post_formatted": ". \n@!CHRIS-CONNELLY-@1-# @(Voiceover) Meanwhile, negative drama inside the group is intentionally drawn out. ",
   "surface": "nobody has to like me",
   "inverse": "not all have to like me",
   "uniqueID": 371
 },
 {
   "pre_formatted": " @!CHRISTIANE-AMANPOU# @(Off-camera) You heard, as we started, that some of your congressional Democrats are saying they're not going to be held hostage to this and that they will not submit to it. Will they? \n@!DAVID-AXELROD-@1SE# Well, look, I don't put it in those terms. I think ",
   "match": "every single person in that building does not want taxes to go up on January 1st",
   "post_formatted": ", does not want to see 2 million people lose their unemployment insurance. Everybody understands what @ @ @ @ @ @ @ @ @ @ has spoken to it, if that package doesn't move forward. ",
   "surface": "none (in that building) want taxes to go up on January 1st",
   "inverse": "not all (in that building) want taxes to go up on January 1st",
   "uniqueID": 372
 },
 {
   "pre_formatted": " @!CHRISTIANE-AMANPOU# @(Off-camera) You heard, as we started, that some of your congressional Democrats are saying they're not going to be held hostage to this and that they will not submit to it. Will they? \n@!DAVID-AXELROD-@1SE# Well, look, I don't put it in those terms. I think every single person in that building does not want taxes to go up on January 1st, ",
   "match": "[every single person in that building] does not want to see 2 million people lose their unemployment insurance",
   "post_formatted": ". Everybody understands what @ @ @ @ @ @ @ @ @ @ has spoken to it, if that package doesn't move forward. ",
   "surface": "none (in that building) want to see 2 million people lose their unemployment insurance",
   "inverse": "not all (in that building) want to see 2 million people lose their unemployment insurance",
   "uniqueID": 373
 },
 {
   "pre_formatted": "Everything else needs to be on the table. The House, in their budget @ @ @ @ @ @ @ @ @ @ cut in our budget of 12 percent in domestic discretionary. I might say ... \n@!MR-GREGORY: But, but, but, Senator, it's -- ",
   "match": "everything is not on the table",
   "post_formatted": ". I mean, the point is you're talking about -- you're heralding 12 percent of the budget. ",
   "surface": "nothing is on the table",
   "inverse": "not all things are on the table",
   "uniqueID": 374
 },
 {
   "pre_formatted": "And you're @ @ @ @ @ @ @ @ @ @ Gretchen Morgenson, we have an email from Rudolph(ph) in Kansas City, Missouri. He says: The government should get out of the business of backing up home loans. If there were no backups, then less people would get loans, but the loans that would be given out would be better. ",
   "match": "Everyone in America does not deserve to own a mortgage",
   "post_formatted": ". There is a lot of responsibility that comes with home mortgage ownership. ",
   "surface": "no one (in America) deserves to own a mortgage",
   "inverse": "not all (in America) deserve to own a mortgage",
   "uniqueID": 375
 },
 {
   "pre_formatted": "We need to do something @ @ @ @ @ @ @ @ @ @ to stop doing? What services will they going to stop offering? \n@!MARTIN: Well, can I - let me just stop you, Shelby, can I just stop you there? ",
   "match": "Everybody does not agree on that",
   "post_formatted": ". Maybe everybody agrees that the deficit is a problem, that the debt is - the national debt is a problem, certainly. ",
   "surface": "nobody agrees on that",
   "inverse": "not all agree on that",
   "uniqueID": 376
 },
 {
   "pre_formatted": " @!MARTIN: Well, can I - let me just stop you, Shelby, can I just stop you there? Everybody does not agree on that. Maybe everybody agrees that the deficit is a problem, that the debt is - the national debt is a problem, certainly. But ",
   "match": "everybody does not agree about what the government should do",
   "post_formatted": ", as evidenced by our conversation here today. So the question then becomes, what do you do about that? ",
   "surface": "nobody agrees about what the government should do",
   "inverse": "not all agree about what the government should do",
   "uniqueID": 377
 },
 {
   "pre_formatted": " @!JAY-SCHADLER-@1-AB# @(Voiceover) March 5th, 2007. \n@!RHONDA-ROLLINS-@1J# At 6:30 in the morning, I was getting ready for work, and I felt a jolt just go right through me. And instinctively I thought of Justin, and I thought, \"Boy, I hope everything's okay.\" \n@!JAY-SCHADLER-@1-AB# @(Voiceover) ",
   "match": "Everything is not okay",
   "post_formatted": ". Seven @ @ @ @ @ @ @ @ @ @ among them, Army Specialist Justin Rollins. ",
   "surface": "nothing is okay",
   "inverse": "not all things are okay",
   "uniqueID": 378
 },
 {
   "pre_formatted": "They smoke on lots of TV shows and many, many movies. I think they're just giving her a tough time. She's playing a character that goes with the song and I think people should just let her go and do what she wants artistically. ",
   "match": "Every kid is not going to go, look at the cigarettes",
   "post_formatted": ". I have to buy some Marlboros. ",
   "surface": "none are going to go, look at the cigarettes",
   "inverse": "not all are going to go, look at the cigarettes",
   "uniqueID": 379
 },
 {
   "pre_formatted": "And he would promise me that, you know, everything was - he learned his lesson, or whatever. And then the next morning, by the time, you know, the next morning came, he was gone again. So eventually, you know, that's where I got. I got to the point that, you know, I realized that ",
   "match": "everything I was doing was not helping him",
   "post_formatted": ". So I would never, ever - you know, people in this, you know, world of rehab and addiction, you know, they tell you you have to let go and let a person hit bottom @ @ @ @ @ @ @ @ @ @ mean, I never, ever could let go of my son. ",
   "surface": "nothing (that I was doing) was helping him",
   "inverse": "not all things (that I was doing) were helping him",
   "uniqueID": 380
 },
 {
   "pre_formatted": "I won't -- I can't let that happen again. \n@!UNIDENTIFIED-MALE: It was ten years ago. Everyone missed something that day. \n@!DANES: ",
   "match": "Everyone's not me",
   "post_formatted": ". \n@(END-VIDEO-CLIP) \n@!MORGAN: That's Claire Danes, as an enigmatic CIA agent in Showtime's brilliant \"Homeland.\"",
   "surface": "no one is me",
   "inverse": "not all are me",
   "uniqueID": 381
 },
 {
   "pre_formatted": " @!RACHEL-CAMPOS-DUFF: Yes. It would have to be on Oprah's salary to afford going out to work in the outside world, but, I'd say that, you know, I really am dubious about this study. I mean, if you called me, it would depend on which day you called me and what I would say about how much I love at @ @ @ @ @ @ @ @ @ @ you have to take it as a total whole experience. And ",
   "match": "every day is not going to be perfect",
   "post_formatted": ". So, I'm a little dubious about the study. ",
   "surface": "none are going to be perfect",
   "inverse": "not all are going to be perfect",
   "uniqueID": 382
 },
 {
   "pre_formatted": "Did she perjure herself? Don't know. You've got tot mom on the computer the morning of the \"drowning\" looking at outfits for shot girls. ",
   "match": "Everything about the accidental drowning that morning is not holding up to the facts",
   "post_formatted": ". \n@!DAN-ABRAMS-@1-ABC-# @(Off-camera) One of the final points, Cindy Anthony's testimony Friday, we see again her memory getting clearer to help the defense, which is a, which is very interesting. ",
   "surface": "nothing (about the accidental drowning that morning) is holding up to the facts",
   "inverse": "not all things (about the accidental drowning that morning) are holding up to the facts",
   "uniqueID": 383
 },
 {
   "pre_formatted": "Some worry these mountains of food are quickly translating into super-sized obesity rates. And KFC has its own concerns that continual inflation and recent salary hikes will force the restaurant's rising prices even higher, but no doubt about it. For now this restaurant chain has struck gold -- battered, crispy gold. \n@!SAM-SU: China is the best opportunity for pretty much every industry in the world, and, you know, ",
   "match": "every major company can not think of a strategy without China",
   "post_formatted": ". \n@!CELIA-HATTON: With a new location opening its doors in China every eighteen hours, few here can conceive of a world without KFC.",
   "surface": "none can think of a strategy without China",
   "inverse": "not all can think of a strategy without China",
   "uniqueID": 384
 },
 {
   "pre_formatted": "My concern is, did they show premeditation? Because it certainly looks to me like she killed her daughter. But that's not murder. ",
   "match": "Every killing is not murder",
   "post_formatted": ". Right? ",
   "surface": "none are murder",
   "inverse": "not all are murder",
   "uniqueID": 385
 },
 {
   "pre_formatted": "Joanne thought the two were just friends. They told her he was gay. And Joanne told skeptical friends Steven @ @ @ @ @ @ @ @ @ @ the mortgage. \n@!NORB-WITT: No one, every friend she had, ",
   "match": "everyone in the family did not want him in there",
   "post_formatted": ". But Joanne was very strong willed. ",
   "surface": "no one (in the family) wanted him in there",
   "inverse": "not all (in the family) wanted him in there",
   "uniqueID": 386
 },
 {
   "pre_formatted": "It's not necessarily the right thing for you. And in this study what we really see is that although we've heard calcium prevents osteoporosis and fractures, in certain people it may in fact increase the risk of heart disease. There's no such thing as the one-size-fits-all prevention plan. ",
   "match": "Everyone should not be on a vitamins supplement like calcium",
   "post_formatted": ". You really need to talk to your @ @ @ @ @ @ @ @ @ @ at risk for osteoporoses, maybe it's right for you. ",
   "surface": "no one should be on a vitamins supplement like calcium",
   "inverse": "not all should be on a vitamins supplement like calcium",
   "uniqueID": 387
 },
 {
   "pre_formatted": "Of course I did. You know, I thought this guy was it, and absolutely I was going to get him. And he wasn't the guy. So ",
   "match": "everything that I thought was truth was not truth anymore",
   "post_formatted": ". And, yes, I felt very guilty. ",
   "surface": "nothing (that I thought was truth) was truth anymore",
   "inverse": "not all things (that I thought were truth) were truth anymore",
   "uniqueID": 388
 },
 {
   "pre_formatted": " @!RIVERS: God bless her, our little Snooki. \n@!HAMMER: Now, the thing is, with this book, Joan, aptly titled \"I Hate Everything Starting With Me,\" you go off on yourself at the beginning of the book. We love you so much it's hard for me to believe that you really are so self-loathing. \n@!RIVERS: ",
   "match": "Everyone that thinks they're terrific are not interesting",
   "post_formatted": ". Look at me. ",
   "surface": "no one (that thinks they're terrific) is interesting",
   "inverse": "not all (that think they're terrific) are interesting",
   "uniqueID": 389
 },
 {
   "pre_formatted": "And this is an unauthorized leak. Yes, of course, she's right; it's unauthorized. It should not have become public. But at this point, is it realistic for anybody in the story - George Zimmerman or Trayvon Martin's family - to expect that ",
   "match": "everything they have ever done will not become public",
   "post_formatted": "? \n@!KEITH-WOODS: Well, that's the nature of reporting. ",
   "surface": "nothing (that they have ever done) will become public",
   "inverse": "not all things (that they have ever done) will become public",
   "uniqueID": 390
 }
]
