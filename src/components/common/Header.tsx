"use client";

import { Search, ShoppingCart, Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProductFilters } from "@/components/features/Products/ProductFilters";
import Image from "next/image";
// Đảm bảo bạn có file logo hoặc dùng text thay thế
import logoImage from "@/assets/logoImage.png"; 

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center gap-4">
        {/* Mobile Filter Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden shrink-0">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
             <div className="py-4">
               <ProductFilters />
             </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="flex items-center gap-2 mr-4">
           <Image src={logoImage} alt="Logo" width={32} height={32} className="object-contain" />
           <span className="font-bold text-xl hidden sm:inline-block">Petlytic</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md hidden md:flex items-center gap-2">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for products..."
              className="w-full pl-9 bg-muted/50 focus:bg-background transition-colors"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
           {/* Mobile Search Trigger (Optional) */}
           <Button variant="ghost" size="icon" className="md:hidden">
             <Search className="h-5 w-5" />
           </Button>

           <Button variant="ghost" size="icon" className="relative">
             <Bell className="h-5 w-5" />
             <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />
           </Button>

           <Button variant="ghost" size="icon" className="relative">
             <ShoppingCart className="h-5 w-5" />
             <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center rounded-full">3</Badge>
           </Button>
           
           <Avatar className="h-8 w-8 ml-2 cursor-pointer">
             <AvatarImage src="https://github.com/shadcn.png" />
             <AvatarFallback>U</AvatarFallback>
           </Avatar>
        </div>
      </div>
    </header>
  );
}