var config = {
  style: "https://api.maptiler.com/maps/925063be-291c-4420-a2f3-81367d87992e/style.json?key=dQ1j4jkoqNgkVI91Txog",
  showMarkers: true,
  markerColor: "#D73F3F",
  inset: true,
  legend: false,
  theme: "light",
  useCustomLayers: true,
  bookmarks: false,
  chapterReturn: true,
  headerTitle: "15 Years of Community-led Mapping",
  logo: "",
  subtitle:
    "Short blurb to set the stage for the story, and introduce the main theme.",
  byline: "27 November 2024 : Kshitij Raj Sharma",
  welcomeImage: "",
  creditLogos: [""],
  backgroundImage: "images/header-img.png",
  mobileview:
    '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">',
  footer: "Copyright 2024 @ Kshitij Raj Sharma",
  chapters: [
    {
      id: "drive",
      alignment: "left",
      hidden: false,
      title: "When Drive Meets Information",
      image: "",

      description:
        "We live in a world where almost anyone, anywhere can see when disaster strikes around the globe. And most times, with access to this information, comes a feeling of responsibility and wonder—what can I do to help from so far away?",
      location: {
        center: [0, 0],
        zoom: 1,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
      descriptionImages: [],
    },
    {
      id: "drive2",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      // caption: "HXL Logo",
      website: "",
      description:
        "This is the sentiment that brought together a small group of innovators who shared a passion for new, free, and open source mapping technologies like OpenStreetMap (OSM), and a desire to use it to solve humanitarian problems. <br> <br>They began brainstorming ways they could use the geospatial data being contributed by vo6lunteers all around the world, for cri6sis response. <br> <br>The idea was that since they were so far away, they would offer what they had: <ul><li><strong>Information</strong>(in the form of satellite images),</li><li><strong>Skills</strong>(in the form of adding  landscape features like buildings and roads to OSM’s database),</li><li><strong>Connections</strong>(to other open map enthusiasts and humanitarian organizations)</li></ul>",
      location: {
        center: [0, 0],
        zoom: 0,
        pitch: 0,
        bearing: 0,
      },
      descriptionImages: [
    
      ],
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "drive3",
      alignment: "center",
      hidden: false,
      title: "",
      image: "",
      website: "",
      description:
        'The following years were a trial period, filled with gathering first-hand knowledge from others who were trying to bridge the worlds of humanitarian response and technology, discussing whether HOT would work and learning about gaps in how data was being provided for humanitarian use. <br> <br>They got to see how issues like maps not getting real-time updates could make coordinating disaster response difficult and shared their concepts for solving this (Humanitarian OpenStreetMapTeam)  at various conferences',
      location: {
        center: [90.356331, 23.684994],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      descriptionImages: [
      ],
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "first-activation1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      website:"",
      description:
        'In 2009, a number of ‘activations’ took place - Typhoon Ondoy response in Philippines',
      location: {
        center: [121.76662, 12.87545],
        zoom: 4.41,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      descriptionImages: [
      ],

      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "first-activation2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      // caption: "HXL Logo",
      website:
        "",
      description:
        ' Post election crisis in Iran,',
      location: {
        center: [52.95839, 32.88223],
        zoom: 4.18,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      descriptionImages: [
        // "images/pcode_detail.png",
        // "images/global_pcodes.png",
        // "images/global_pcodes_hdx.png",
      ],

      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "first-activation3",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      // caption: "HXL Logo",
      website:
        "",
      description:
        'And Gaza during conflict',
      location: {
        center: [34.41261, 31.51981],
        zoom: 10.83,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      descriptionImages: [
        // "images/pcode_detail.png",
        // "images/global_pcodes.png",
        // "images/global_pcodes_hdx.png",
      ],

      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "haiti",
      alignment: "left",
      hidden: false,
      title: "Haiti 2012",
      description:
        'Like most great ideas, it took a while for everyone to catch on to the potential in Open Street Map for humanitarian response.<br><br>Then, in 2010, a devastating earthquake struck Haiti. With almost no detailed maps of the region before the disaster, coordinating an effective response became an immense challenge.',
      // image: "images/goverment house (1).jpg",
      // caption: "HXL Logo",
      website: "",
      location: {
        center: [-73.10125, 19.05982],
        zoom: 7.3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      descriptionImages: ["images/goverment house (1).jpg"],

      callback: "",
      onChapterEnter: [
        {
          layer: "case-study-layer",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "case-study-layer",
          opacity: 0,
        },
      ],
    },
    {
      id: "haiti",
      alignment: "left",
      hidden: false,
      title: "",
      description:
        'In the six weeks that followed, over 600 volunteers from around the world worked together to improve the existing map.<br><br> The results of this activity resulted in the Humanitaria OpenStreetmap Team (HOT) conforming officially that year, aiming to keep supporting communities living in disaster-prone areas.',
      // image: "images/hxl_method.png",
      // caption: "HXL Logo",
      website: "",
      location: {
        center: [-72.34499, 18.54714],
        zoom: 13.47,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      descriptionImages: [],

      callback: "",
      onChapterEnter: [
        {
          layer: "case-study-layer",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "case-study-layer",
          opacity: 0,
        },
      ],
    },
    {
      id: "pioneer",
      alignment: "full",
      hidden: false,
      title: "Pioneering Community-Led Mapping",
      image: "images/goverment house (2).jpg",
      // caption: "HXL Logo",
      website: "",
      description:
        'In 2012, HOT in collaboration with HRI (Haiti Recovery Initiative), initiated a three month program involving 30 youth mappers. They were taught how to collect and update map data in the Saint-Marc commune by learning how to use various tools. <br><br> By the end of the project the foundation for an evolving record of life in the Saint-Marc commune had been laid. <br><br> Equipped with a power to create a more comprehensive, accurate map, local authorities and community groups could plan better for crisis response, recovery and future developments.<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/rBSAN1H1Fhg?si=u9-LA5cOZZLtYfUS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      location: {
        center: [-74.297333, 4.570868],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      descriptionImages: [
      ],

      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "pioneer2",
      alignment: "left",
      hidden: false,
      title: "",
      // image: "images/healthsites.png",
      // caption: "HXL Logo",
      // website: "https://healthsites.io/",
      description:
        'From these experiences, HOT’s members realized a key tenet of their work: <strong> open mapping should support communities before disaster strikes.</strong> By having strong foundations in areas like health, WASH (water, sanitation, and hygiene services), housing, food, gender equality and others, communities would be better prepared to face disasters and will have the resilience to bounce back once they hit.',
      location: {
        center: [0, 0],
        zoom: 1,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
        // "images/healthsites.png",
        // "images/hotosm_hdx.png",
        // "images/acled.png",
      ],

      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "pioneer3",
      alignment: "left",
      hidden: false,
      title: "",
      // image: "images/healthsites.png",
      // caption: "HXL Logo",
      // website: "https://healthsites.io/",
      description:
        'Moreover, with the introduction of a localization approach—made possible by funding from the Audacious Project in 2020—we were able to support communities through our four new regional open mapping hubs: Asia Pacific, Eastern and Southern Africa, West and Northern Africa, and Latin America and the Caribbean.<br><br>Here are some examples of the type of projects that followed this change in framing:',
      location: {
        center: [0, 0],
        zoom: 1,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
        // "images/healthsites.png",
        // "images/hotosm_hdx.png",
        // "images/acled.png",
      ],

      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "dar1",
      alignment: "full",
      hidden: false,
      title: "Community Mapping for Flood Resilience and Development in Tanzania: RAMANI HURIA",
      image: "",
      // caption: "HXL Logo",
      // website: "https://healthsites.io/",
      description: 'In Kigogo, a ward in Dar es Salaam, Tanzania’s bustling metropolis, residents are accustomed to going about daily life with an impending risk of floods.<br><br>Surrounded by river valleys on both sides, with a rapidly increasing  urban density, waterways have become backed up with solid waste due to residents developing settlements along the river valleys without setting up waste collection points.<br><br>These factors have led to an increase in flood risks especially during rainy seasons.<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/VtDcR_e8_vQ?si=bCHeBxwGJndOMGMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      location: {
        center: [39.24764, -6.81722],
        zoom: 10,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "dar2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      // caption: "HXL Logo",
      // website: "https://healthsites.io/",
      description: 'Realising that unveiling the rapidly growing layers of the city was a necessity, in 2015, a project—Ramani Huria “Open Map”—ensued.<br><br>Since this was a sizeable task, it was decided that it would be carried out in stages:<ul><li>Training: This involved technical training from HOT that would introduce the university students to open source tools and OSM data. They would  learn how to use their mobile phones and GPS units as data collection tools and then perform mapping exercises that would practicalise the skills learnt.</li><br><li>Execution: During this stage university students were paired with community members to collect field data, which would be subsequently digitized.</li><br><li>Implementation: The collected data was able to make both global and local impact. Firstly map data was shared with OSM. Back home they realized that  some communities did not have access to the internet or computers and so they would better benefit from printed maps that which would assist the government with making like decision waste management routes and flood risks assesments.</li></ul>',
      location: {
        center: [0, 0],
        zoom: 0,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
      "images/dar-1.png",
      "images/dar-2.png",
      "images/dar-3.png",
      "images/dar-4.png",   
    ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "dar3",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      // caption: "HXL Logo",
      // website: "https://healthsites.io/",
      description: 'With data they gathered, they were able to highlight flood prone areas in kigogo and other wards in Dar es Salaam, which will help communities plan ahead of flooding for disaster management and response',
      location: {
        center: [39.24842, -6.81783],
        zoom: 16.50,
        pitch: 80.90,
        bearing: -85.36,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "canoa1",
      alignment: "full",
      hidden: false,
      title: "Open Mapping For Social Change & Security in Brazil: Canoa de Tolda",
      image: "images/canoa-1.jpg",
      caption: "The Luzitâmia canoe, the last and oldest traditional cargo vessel in the São Francisco River basin.Photo by Nilton Souza.",
      website: "https://canoadetolda.org.br/",
      description: 'When the Lower São Francisco River communities hear the word “Canoa de Tolda” they think of two things. First they think of the legendary traditional boat that’s exclusive to their region—a shaded (or tent) canoe. Second they think of the organization that has been empowering them to collect data that’ll help them fight flooding and defend their rights.',
      location: {
        center: [-37.09838, -9.95195],
        zoom: 7.81,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "canoa2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: "",
      description: "The São Francisco River has a history of social and economic significance, with communities still using its waters for irrigation and  fishing, till today. In more recent times it has become a source of urban, industrial, animal, rural demand, and several dams as a source for  electricity.<br><br>However, these developments have also posed challenges.With the construction of large dams that have eliminated  the natural flood cycle, changed the flow of the river, and disrupted the natural distribution of fertile sediments and water across flood plains.<br><br>Communities now face increased flood risks in some regions, while others battle with reduced access to drinking water due to salinization, lakes drying out, and loss of natural fish nurseries.<br><br>The first seed for the MapSãoFrancisco projected was planted when they read about the Makoko project, which was covered by the Guardian, Carlos Eduardo Ribeiro Jr, the coordinator for Canoa De Tolda says “I immediately thought: I have to go there and know more about this project. This is beautiful. I couldn't but found HOT and started the conversations (in 2021).”",
      location: {
        center: [-36.95130, -10.06591],
        zoom: 7.81,
        pitch: 0,
        bearing: -13.60,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "canoa3",
      alignment: "left",
      hidden: false,
      title: "",
      image: "images/canoa.jpg",
      caption: "Field mapping in Ilha do Ferro, Alagoas, Brazil",
      website: "",
      description: 'After attending OpenMap Development Tanzania (OMDTZ) webinar, they realized that their context in Brazil had many similarities to the context presented in Tanzania, and that the low-cost methodologies and techniques adopted could be used by Canoa.<br><br>From June to July 2022, HOT staff trained and supported the Canoa de Tolda team to acquire materials and equipment for the project’s activities which would include: flood monitoring, 3D drone modeling and community mapping, which was mainly concentrated in city of Ilha do Ferro.',
      location: {
        center: [-37.09838, -9.95195],
        zoom: 7.81,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
        "images/field.jpg",
        "images/drone.jpg",
        "images/bath.jpg",
        "images/digi.jpg",
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "canoa4",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: "",
      description: 'Adopting the aforementioned low-cost techniques, they built a small boat, made of foam, with a GPS unit mounted on top and the sonar on the bottom. Using this tool would make otherwise dangerous underwater surveys easier and much more efficient.',
      location: {
        center: [-37.09838, -9.95195],
        zoom: 7.81,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
        "images/trimaran.jpg",
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "canoa5",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: "",
      description: 'The quality of data produced as a result was so efficient that they went on to create a digital model of the boat, that can be reproduced in numerous other materials such as PVC foam, fiberglass, machining in foam and/or low density wood, all with the possibility with being autonomous.<br><br>This will allow communities independently access accurate and sufficient information on the São Fancisco the river, to help inform and strategize on how best to use it waters to nurture it’s surrounding communities while keeping them safe.',
      location: {
        center: [-37.09838, -9.95195],
        zoom: 7.81,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
        "images/trimaran.jpg",
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "break2",
      alignment: "left",
      hidden: false,
      title: "When A Global Pandemic Hits: Open Mapping in the face of COVID-19",
      image: "",
      caption: "",
      website: "",
      description: 'Through the years, the HOT team had already engaged in several projects addressing health initiatives around the world (highlight some examples).But things really changed when the COVID-19 pandemic hit in 2020 and offered new challenges in our support to communities. However, it was also an opportunity to demonstrate the power of open mapping amplified by global crowdsourced voluteers, who were alreadly familiar with the world of virtual work.',
      location: {
        center: [-37.09838, -9.95195],
        zoom: 7.81,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
        "images/trimaran.jpg",
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "pub1",
      alignment: "left",
      hidden: false,
      title: "Remote Mapping For Rapid COVID-19 Response in Mongolia: Public Labs",
      image: "",
      caption: "",
      website: "",
      description: 'Naara, a mother of three who lives in Ulaanbaatar, Mongolia, often struggles to find information about hospitals or pediatric clinics with emergency service when one of her kids are sick. Naara’s sentiments are no stranger to most Mongolians, who have to find hospitals via word of mouth or social platforms due to a lack of reliable database on healthcare services accessible to the public.<br><br>So when the COVID-19 pandemic struck, communities where left vulnerable, with public officials struggling to pinpoint hotspots, allocate resources efficiently, and coordinate response efforts due to large gaps in  geospatial data.',
      location: {
        center:[106.92202, 47.92443],
        zoom: 9.55,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "pub2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "images/pub-1.jpg",
      caption: "",
      website: "",
      description: 'Amidst the pandemic, a group of diverse individuals representing the 21 provinces of Mongolia came together to support the Covid-19 response in Mongolia, brought together by Public Labs Mongolia (an NGO) to map essential health in their communities.<br><br>Participants learned how to use and make data contributions to OpenStreetMap. They then mapped all the health and essential services in the 21 provinces and 330 soums (counties) of the country.',
      location: {
        center: [-37.09838, -9.95195],
        zoom: 7.81,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "pub2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: "",
      description: 'The map data is now being used for various service such as maintaining an up-to-date health service information portal. With the health service information portal and mobile app, community members like Naara can now look up available services using multiple filter options such as proximity, location, specialties or type of service, opening hours, and wheelchair accessibility.',
      location: {
        center: [-37.09838, -9.95195],
        zoom: 7.81,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
        "images/pub-2.jpg",
        "images/pub-3.jpg",
        "images/pub.jpg",
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "sunnu1",
      alignment: "full",
      hidden: false,
      title: "Community Mapping For Maternity Health Services in Senegal: Sunnu Wer Gi Yaram",
      image: "",
      caption: "",
      website: "",
      description: "Mme Baal is a chief nurse in Matam, Senegal. Hers days at the clinic, usually involves receiving a call that a pregnant mother is being rushed in on a cart, whom sometimes  deliver before they can even arrive. Sadly, this situation isn't peculiar to mothers in Matam, who can relate to birthing complications due to inadequate healthcare structures.",
      location: {
        center: [-13.28646, 15.64790],
        zoom: 11.42,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/xr-qOnGZ72M?si=q1Pre_3mditXNjCS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "sunnu1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: "",
      description: "Because most healthcare facilities are limited to urban areas, rural residents often cannot afford transportation and struggle with scarcity of medication and specialised personnel.<br><br>To mitigate this, stakeholders like Ministry of Health,Marie Stopes Senegal, and others realised they would first need to collect data, to make better informed decisions.",
      location: {
        center: [-37.09838, -9.95195],
        zoom: 7.81,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
        ''
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "sunnu2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "images/sengal-3.png",
      caption: "",
      website: "",
      description: "Teaming up with HOT they were able to achieve the project's main objective which included: <ul><li>Providing training in project methodologies and tools to both locals and stakeholders.</li><li>Gathering data on health facilities, roads, health hazards, disease outbreaks, and vaccination campaigns and more.</li></ul>",
      location: {
        center: [-37.09838, -9.95195],
        zoom: 7.81,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
        'images/sengal-1.png',
        'images/sengal-2.png',
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "sunnu3",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: "",
      description: "The project data is now being used to inform pre and post maternal care decisions by creating products like datasets and maps that’ll help support supply chain management and drug dispensation, making public health facilities services readily available inhabitants in the region and beyond.",
      location: {
        center: [-37.09838, -9.95195],
        zoom: 7.81,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      descriptionImages: [
      ],
      rotateAnimation: true,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
