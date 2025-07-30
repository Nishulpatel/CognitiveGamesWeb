'use client';

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { gameCards } from "@/data/GamesData";

export default function GamesCard() {
  return (
    <div className="mt-20 mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {gameCards.map((game) => (
        <Card
          key={game.id}
          className="group relative overflow-hidden rounded-2xl bg-white border border-gray-600 shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] cursor-pointer">
          <div className="relative overflow-hidden rounded-t-2xl">
            <Image
              src={game.image}
              alt={game.name}
              width={400}
              height={200}
              className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-4 space-y-4">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#A35C2D] transition-colors duration-300">
              {game.name}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {game.description}
            </p>

            <div className="flex gap-3 pt-2">
              <Link
                href={game.rulesLink}
                className="flex-1 px-4 py-2.5 bg-gradient-to-r bg-[#A35C2D] text-white rounded-lg text-sm font-semibold hover:bg-[#A35CD]  transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105">
                Play Game
              </Link>
            </div>
          </div>

          <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </Card>
      ))}
    </div>
  );
}
