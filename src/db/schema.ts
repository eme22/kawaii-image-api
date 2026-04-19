import { pgTable, text, boolean, timestamp, serial, pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Enums for Categories
export const sfwEnum = [
    'neko', 'waifu', 'cry', 'hug', 'kiss', 'lick', 'pat', 'smug', 
    'bonk', 'blush', 'smile', 'wave', 'five', 'bite', 'slap', 
    'kick', 'wink', 'poke', 'dance', 'cringe', 'cat', 'pokemon', 
    'shinobu', 'megumin', 'aqua', 'holo'
] as const;

export const nsfwEnum = [
    'feet', 'blowjob', 'trap', 'fuck', 'solo', 'cum', 'les', 
    'spank', 'boobs', 'smallboobs', 'lewd', 'anal', 'futa', 'holonsfw'
] as const;

export const users = pgTable("user", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    avatar: text("avatar"),
    admin: boolean("admin").default(false).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const images = pgTable("image", {
    id: serial("id").primaryKey(),
    userId: text("userId").notNull().references(() => users.id),
    nsfw: boolean("nsfw").notNull(),
    category: text("category").notNull(), // Using text to allow both enums easily
    aproved: boolean("aproved").default(false).notNull(),
    link: text("link").notNull(),
});

// Relationships
export const usersRelations = relations(users, ({ many }) => ({
    images: many(images),
}));

export const imagesRelations = relations(images, ({ one }) => ({
    user: one(users, {
        fields: [images.userId],
        references: [users.id],
    }),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Image = typeof images.$inferSelect;
export type NewImage = typeof images.$inferInsert;
