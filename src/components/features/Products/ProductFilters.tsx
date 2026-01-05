"use client";

import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function ProductFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4 text-lg">Categories</h3>
        <div className="space-y-3">
          {[
            "Food & Nutrition",
            "Toys",
            "Accessories",
            "Health Care",
            "Grooming",
          ].map((category) => (
            <div key={category} className="flex items-center gap-2">
              <Checkbox id={category} />
              <Label
                htmlFor={category}
                className="text-sm font-normal cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-4 text-lg">Price Range</h3>
        <Slider defaultValue={[50]} max={100} step={1} className="mb-4" />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>$0</span>
          <span>$500+</span>
        </div>
      </div>

      <Button className="w-full" variant="outline">
        Reset Filters
      </Button>
    </div>
  );
}
