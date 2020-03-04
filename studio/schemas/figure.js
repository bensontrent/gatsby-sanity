export default {
  name: "figure",
  title: "Figure",
  type: "image",
  options: {
    hotspot: true
  },
  fields: [
    {
      name: "alt",
      title: "Alternative text (for screen readers)",
      type: "string",
      options: {
        isHighlighted: true
      }
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
      options: {
        isHighlighted: true
      }
    },
    {
      name: "hasLightbox",
      title: "Allow lightbox popup of enlarged image?",
      type: "boolean",
      options: {
        isHighlighted: true
      }
    },
    {
      name: "css",
      title: "Additional css classes (separate multiple classes with a space)",
      type: "string",
      options: {
        isHighlighted: true
      }
    }
  ]
};
