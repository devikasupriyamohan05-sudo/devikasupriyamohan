/* ============================================================
   DEVIKA'S TRAVEL MAP DATA
   ------------------------------------------------------------
   To personalize a country:
   - "blurb": one-two lines shown on hover (your mini itinerary)
   - "photos": drop images in assets/photos/travel/ and list them,
     e.g. photos: ["assets/photos/travel/greece1.jpg", "assets/photos/travel/greece2.jpg"]
   The first 2 photos show in the hover preview; all of them show
   when the dot is clicked.
   ============================================================ */

const TRAVEL_PLACES = [
  // ---------- africa ----------
  { name: "Morocco",       lat: 31.79,  lng: -7.09,   region: "africa",        blurb: "itinerary coming soon", photos: [] },

  // ---------- asia ----------
  { name: "Cambodia",      lat: 12.57,  lng: 104.99,  region: "asia",          blurb: "itinerary coming soon", photos: [] },
  { name: "India",         lat: 20.59,  lng: 78.96,   region: "asia",          blurb: "itinerary coming soon", photos: [] },
  { name: "Japan",         lat: 36.20,  lng: 138.25,  region: "asia",          blurb: "itinerary coming soon", photos: [] },
  { name: "Sri Lanka",     lat: 7.87,   lng: 80.77,   region: "asia",          blurb: "itinerary coming soon", photos: [] },
  { name: "Thailand",      lat: 15.87,  lng: 100.99,  region: "asia",          blurb: "itinerary coming soon", photos: [] },
  { name: "Vietnam",       lat: 14.06,  lng: 108.28,  region: "asia",          blurb: "itinerary coming soon", photos: [] },

  // ---------- europe ----------
  { name: "Austria",       lat: 47.52,  lng: 14.55,   region: "europe",        blurb: "itinerary coming soon", photos: [] },
  { name: "Belgium",       lat: 50.50,  lng: 4.47,    region: "europe",        blurb: "itinerary coming soon", photos: [] },
  { name: "Croatia",       lat: 45.10,  lng: 15.20,   region: "europe",        blurb: "itinerary coming soon", photos: [] },
  { name: "Cyprus",        lat: 35.13,  lng: 33.43,   region: "europe",        blurb: "itinerary coming soon", photos: [] },
  { name: "France",        lat: 46.23,  lng: 2.21,    region: "europe",        blurb: "itinerary coming soon", photos: [] },
  { name: "Germany",       lat: 51.17,  lng: 10.45,   region: "europe",        blurb: "itinerary coming soon", photos: [] },
  { name: "Greece",        lat: 39.07,  lng: 21.82,   region: "europe",        blurb: "my favorite country — the food, the people, the beauty", photos: [] },
  { name: "Italy",         lat: 41.87,  lng: 12.57,   region: "europe",        blurb: "itinerary coming soon", photos: [] },
  { name: "Netherlands",   lat: 52.13,  lng: 5.29,    region: "europe",        blurb: "itinerary coming soon", photos: [] },
  { name: "Portugal",      lat: 39.40,  lng: -8.22,   region: "europe",        blurb: "itinerary coming soon", photos: [] },
  { name: "Slovenia",      lat: 46.15,  lng: 14.99,   region: "europe",        blurb: "itinerary coming soon", photos: [] },
  { name: "Spain",         lat: 40.46,  lng: -3.75,   region: "europe",        blurb: "itinerary coming soon", photos: [] },
  { name: "Switzerland",   lat: 46.82,  lng: 8.23,    region: "europe",        blurb: "itinerary coming soon", photos: [] },
  { name: "Vatican City",  lat: 41.90,  lng: 12.45,   region: "europe",        blurb: "itinerary coming soon", photos: [] },

  // ---------- north america & caribbean ----------
  { name: "Aruba",         lat: 12.52,  lng: -69.97,  region: "caribbean",     blurb: "itinerary coming soon", photos: [] },
  { name: "Bahamas",       lat: 25.03,  lng: -77.40,  region: "caribbean",     blurb: "itinerary coming soon", photos: [] },
  { name: "Belize",        lat: 17.19,  lng: -88.50,  region: "north america", blurb: "itinerary coming soon", photos: [] },
  { name: "Canada",        lat: 56.13,  lng: -106.35, region: "north america", blurb: "itinerary coming soon", photos: [] },
  { name: "Costa Rica",    lat: 9.75,   lng: -83.75,  region: "north america", blurb: "itinerary coming soon", photos: [] },
  { name: "Jamaica",       lat: 18.11,  lng: -77.30,  region: "caribbean",     blurb: "itinerary coming soon", photos: [] },
  { name: "Mexico",        lat: 23.63,  lng: -102.55, region: "north america", blurb: "itinerary coming soon", photos: [] },
  { name: "Panama",        lat: 8.54,   lng: -80.78,  region: "north america", blurb: "itinerary coming soon", photos: [] },
  { name: "Puerto Rico",   lat: 18.22,  lng: -66.59,  region: "caribbean",     blurb: "itinerary coming soon", photos: [] },
  { name: "United States", lat: 39.80,  lng: -98.60,  region: "north america", blurb: "home base — sugar land, houston, pittsburgh", photos: [] },

  // ---------- oceania ----------
  { name: "Australia",     lat: -25.27, lng: 133.78,  region: "oceania",       blurb: "itinerary coming soon", photos: [] },
  { name: "Fiji",          lat: -17.71, lng: 178.07,  region: "oceania",       blurb: "itinerary coming soon", photos: [] },
  { name: "New Zealand",   lat: -40.90, lng: 174.89,  region: "oceania",       blurb: "itinerary coming soon", photos: [] },

  // ---------- south america ----------
  { name: "Colombia",      lat: 4.57,   lng: -74.30,  region: "south america",
    blurb: "where a coral reef hypnotized me mid-snorkel — click for the full story",
    story: "We were snorkeling in the middle of the ocean, a whole group huddled together with an instructor at the front and one at the back. At some point I drifted off to the side, staring down, and the sun hit the coral reef at exactly the right spot — the coral, the sheer amount of fish, all of it completely mesmerizing. I was stuck there for five, maybe ten minutes, until an instructor had to dive down just to get my attention and pull me back. When I lifted my head out of the water, the entire group was at least a hundred meters away. Worth it.",
    photos: [] },
];
