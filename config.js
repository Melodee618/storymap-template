var config = {
  style: "map/style.json",
  showMarkers: true,
  markerColor: "#3FB1CE",
  inset: true, // if inset map is set to true, legend will be disabled.
  legend: false, // if legend is set to true, inset will be disabled.
  theme: "light",
  useCustomLayers: true, //set true for enabling custom layers from sources.js
  bookmarks: true,
  chapterReturn: true,
  title: "GIS Data Standardization in Humanitarian Space",
  logo: "images/husky.jpg",
  subtitle: "Exploring HXL, CODs, and P-codes for Effective Crisis Response",
  byline: "By Kshitij Raj Sharma",
  mobileview:
    '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
  footer:
    'Source: source citations, etc.<br> Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
  chapters: [
    {
      id: "introduction",
      alignment: "left",
      hidden: false,
      title: "Introduction",
      image:
        "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_960_720.jpg ", // UN humanitarian image
      caption: "",
      website: "",
      legend: "",
      description:
        "Data standardization is essential in the humanitarian field, where rapid response, coordination, and information sharing are paramount. Humanitarian crises often involve multiple agencies working together to deliver aid, where each organization collects and shares data on population distribution, infrastructure, and resources. Without standardization, data incompatibility and misinterpretation can cause delays and errors in delivering aid to affected communities.",
      location: {
        center: [0, 20],
        zoom: 2,
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
    },
    {
      id: "hxl",
      alignment: "right",
      hidden: false,
      title: "Humanitarian Exchange Language (HXL)",
      image:
        "https://cdn.pixabay.com/photo/2018/05/29/10/31/dog-3438453_960_720.jpg ", // HXL logo
      caption: "",
      website: "https://hxlstandard.org/",
      legend: "",
      description:
        "Humanitarian Exchange Language (HXL) is a simple standard for tagging and structuring datasets used by humanitarian organizations. HXL tags data attributes (like organization, location, and population) with a standardized vocabulary, ensuring consistent data formatting and simplifying data sharing and filtering. HXL's lightweight structure makes it easy to implement, even in resource-limited environments.",
      location: {
        center: [-113.72917, 48.58938],
        zoom: 12.92,
        pitch: 39.5,
        bearing: 36.0,
        speed: 0.2,
        curve: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "hxl-layer",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "hxl-layer",
          opacity: 0,
        },
      ],
    },
    {
      id: "cods",
      alignment: "left",
      hidden: false,
      title: "Common Operational Datasets (CODs)",
      image:
        "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg", // HDX logo
      caption: "",
      website: "https://data.humdata.org/organization/ocha",
      legend: "",
      description:
        "Common Operational Datasets (CODs) are essential, authoritative datasets curated to support humanitarian response. Managed by UN OCHA, CODs provide stable, standardized data on critical information like population distribution, administrative boundaries, infrastructure, and road networks. They are meticulously verified, making them a reliable foundation for operational planning.",
      location: {
        center: [20, 20],
        zoom: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "cods-layer",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "cods-layer",
          opacity: 0,
        },
      ],
    },
    {
      id: "pcodes",
      alignment: "right",
      hidden: false,
      title: "Place Codes (P-codes)",
      image:
        "https://cdn.pixabay.com/photo/2018/05/29/10/31/dog-3438453_960_720.jpg ", // Humanitarian Response logo
      caption: "",
      website:
        "https://www.humanitarianresponse.info/en/applications/data/common-operational-datasets",
      legend: "",
      description:
        "P-codes, or Place Codes, are unique identifiers for geographic locations, providing a way to reference specific places consistently across datasets. P-codes make it easy to cross-reference and unify data from multiple sources, helping aid organizations avoid duplication or confusion about location names, which may vary or have multiple spellings.",
      location: {
        center: [30, 30],
        zoom: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "pcodes-layer",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "pcodes-layer",
          opacity: 0,
        },
      ],
    },
    {
      id: "case-study",
      alignment: "left",
      hidden: false,
      title:
        "Case Study: Coordinated Crisis Response with HXL, CODs, and P-codes",
      image:
        "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_960_720.jpg", // UN humanitarian image
      caption: "",
      website: "",
      legend: "",
      description:
        "Let’s take the example of a region affected by a major hurricane. In this scenario, different organizations must collaborate quickly to provide medical aid, shelter, and food distribution across a large affected area. To achieve this, data standardization efforts work together:<br><br>1. Data Collection with HXL<br>2. Data Verification with CODs<br>3. Data Integration with P-codes<br><br>Advantages:<br>HXL: Speeds up data sharing and filtering, ensuring that essential details are easy to access.<br>CODs: Provide verified and stable data for strategic planning and operational support.<br>P-codes: Enable seamless data integration and prevent location-based errors across agencies.",
      location: {
        center: [-75.5, 20],
        zoom: 5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
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
  ],
};
