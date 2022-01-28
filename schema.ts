import { list } from "@keystone-6/core";

import { Lists } from ".keystone/types";

import { text, password, decimal, timestamp, relationship, float } from "@keystone-6/core/fields";

import { document } from "@keystone-6/fields-document";

export const lists: Lists = {
  User: list({
    fields: {
      name: text(),
      username: text({
        validation: { isRequired: true },
        isIndexed: "unique",
      }),
      password: password({
        validation: { isRequired: true },
      }),
      campgrounds: relationship({
        ref: "Campground.author",
        many: true,
      }),
      comments: relationship({
        ref: "Comment.author",
        many: true,
      }),
    },
    ui: {
      listView: {
        initialColumns: ["username"],
      },
    },
  }),
  Campground: list({
    fields: {
      name: text(),
      price: float(),
      description: text({
        ui: { displayMode: "textarea" },
      }),
      image: text(),
      author: relationship({
        ref: "User.campgrounds",
        ui: {
          displayMode: "cards",
          cardFields: ["username"],
          inlineEdit: { fields: ["username"] },
          linkToItem: true,
          inlineConnect: true,
        },
      }),
      comments: relationship({
        ref: "Comment.campgrounds",
        many: true,
        ui: {
          displayMode: "cards",
          cardFields: ["description"],
          inlineEdit: { fields: ["description"] },
          linkToItem: true,
          inlineConnect: true,
        },
      }),
      date: timestamp({
        defaultValue: { kind: "now" },
      }),
    },
    ui: {
      listView: {
        initialColumns: ["name", "description"],
      },
    },
  }),
  Comment: list({
    fields: {
      description: text({
        ui: { displayMode: "textarea" },
      }),
      author: relationship({
        ref: "User.comments",
      }),
      campgrounds: relationship({
        ref: "Campground.comments",
      }),
      date: timestamp({
        defaultValue: { kind: "now" },
      }),
    },
    ui: {
      listView: {
        initialColumns: ["description"],
      },
    },
  }),
};
