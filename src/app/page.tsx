"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Bed, Building, MessageCircle, Star } from 'lucide-react';

const assetMap = [];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="LUXURIA"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Luxury Redefined"
          description="Experience unparalleled elegance and sophistication in the heart of the city"
          tag="Five Star"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.example.com"
            },
            {
              text: "View Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7232913/pexels-photo-7232913.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Accommodations"
          description="Discover our collection of meticulously designed rooms and suites"
          tag="Rooms & Suites"
          tagIcon={Bed}
          products={[
            {
              id: "1",
              brand: "LUXURIA",
              name: "Deluxe King Room",
              price: "$450/night",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/7546604/pexels-photo-7546604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              brand: "LUXURIA",
              name: "Presidential Suite",
              price: "$1,200/night",
              rating: 5,
              reviewCount: "890",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              brand: "LUXURIA",
              name: "Executive Room",
              price: "$650/night",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/33072150/pexels-photo-33072150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="Hotel Amenities"
          description="Indulge in world-class facilities designed for your comfort and convenience"
          tag="Facilities"
          tagIcon={Building}
          features={[
            {
              title: "Spa & Wellness",
              description: "Rejuvenate your mind and body with our premium spa treatments",
              imageSrc: "https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              title: "Fine Dining",
              description: "Savor exquisite cuisine crafted by our award-winning chefs",
              imageSrc: "https://images.pexels.com/photos/3775172/pexels-photo-3775172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              title: "Fitness Center",
              description: "State-of-the-art equipment and personal training services",
              imageSrc: "https://images.pexels.com/photos/6739958/pexels-photo-6739958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              title: "Infinity Pool",
              description: "Stunning rooftop pool with panoramic city views",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Hear from our distinguished guests about their exceptional stays"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Victoria Sterling",
              role: "CEO, Sterling Enterprises",
              testimonial: "The attention to detail and impeccable service exceeded all expectations. Every moment was pure luxury.",
              imageSrc: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Investment Director",
              testimonial: "An extraordinary experience from check-in to departure. The staff anticipated every need with remarkable precision.",
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Isabella Rodriguez",
              role: "Fashion Executive",
              testimonial: "The perfect blend of modern sophistication and timeless elegance. I'll definitely return.",
              imageSrc: "https://images.pexels.com/photos/3220256/pexels-photo-3220256.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "James Wellington",
              role: "Technology Entrepreneur",
              testimonial: "Outstanding facilities and service quality. This hotel sets the gold standard for luxury hospitality.",
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Make a Reservation"
          description="Our concierge team is ready to create your perfect stay experience"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "checkin",
              type: "date",
              placeholder: "Check-in Date",
              required: true
            },
            {
              name: "checkout",
              type: "date",
              placeholder: "Check-out Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or preferences...",
            rows: 4,
            required: false
          }}
          buttonText="Submit Reservation"
          imageSrc="https://images.pexels.com/photos/8667538/pexels-photo-8667538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="LUXURIA"
          columns={[
            {
              items: [
                {
                  label: "Rooms & Suites",
                  href: "rooms"
                },
                {
                  label: "Amenities",
                  href: "amenities"
                },
                {
                  label: "Dining",
                  href: "dining"
                }
              ]
            },
            {
              items: [
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Careers",
                  href: "careers"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Terms of Service",
                  href: "terms"
                },
                {
                  label: "Cancellation",
                  href: "cancellation"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}