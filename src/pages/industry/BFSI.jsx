import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BFSIImage from "../../assets/BFSI.jpeg";
import WhyChooseUsforBFSIMarketingImage from "../../assets/WhyChooseUsforBFSIMarketing.png";
import ConversionRateOptimizationImage from "../../assets/ConversionRateOptimization.png";
import SocialMediaBrandAuthorityImage from "../../assets/SocialMediaBrandAuthority.png";
import ContentMarketingThatBuildsTrustImage from "../../assets/ContentMarketingThatBuildsTrust.png";
import SEOforBFSIBrandsImage from "../../assets/SEOforBFSIBrands.png";
import WhyBFSINeedsSpecializedDigitalMarketingImage from "../../assets/WhyBFSINeedsSpecializedDigitalMarketing.png";

gsap.registerPlugin(ScrollTrigger);

const BFSI = () => {
  const navigate = useNavigate();

  // ========== REFS FOR ALL SECTIONS ==========
  const heroSectionRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubHeadingRef = useRef(null);
  const heroParagraphRef = useRef(null);
  const heroImageRef = useRef(null);

  const whySpecialSectionRef = useRef(null);
  const whySpecialHeadingRef = useRef(null);
  const whySpecialParagraphRef = useRef(null);
  const whySpecialListRef = useRef([]);
  const whySpecialBottomRef = useRef(null);
  const whySpecialImageRef = useRef(null);

  const solutionsSectionRef = useRef(null);
  const solutionsHeadingRef = useRef(null);
  const solutionsSubHeadingRef = useRef(null);
  const productsGridRef = useRef([]);
  const approachHeadingRef = useRef(null);
  const approachPointsRef = useRef([]);
  const approachStatementRef = useRef(null);

  const seoSectionRef = useRef(null);
  const seoImageRef = useRef(null);
  const seoHeadingRef = useRef(null);
  const seoPara1Ref = useRef(null);
  const seoPara2Ref = useRef(null);
  const seoListRef = useRef([]);
  const seoBottomRef = useRef(null);

  const contentSectionRef = useRef(null);
  const contentHeadingRef = useRef(null);
  const contentSubHeadingRef = useRef(null);
  const contentCardsRef = useRef([]);
  const contentImageRef = useRef(null);
  const contentBottomRef = useRef(null);

  const socialSectionRef = useRef(null);
  const socialHeadingRef = useRef(null);
  const socialPara1Ref = useRef(null);
  const socialPara2Ref = useRef(null);
  const socialListRef = useRef([]);
  const socialTaglineRef = useRef(null);
  const socialImageRef = useRef(null);

  const automationSectionRef = useRef(null);
  const automationHeadingRef = useRef(null);
  const automationTopParaRef = useRef(null);
  const automationBottomParaRef = useRef(null);
  const automationCardsRef = useRef([]);

  const croSectionRef = useRef(null);
  const croHeadingRef = useRef(null);
  const croPara1Ref = useRef(null);
  const croListRef = useRef([]);
  const croTaglineRef = useRef(null);
  const croImageRef = useRef(null);

  const processSectionRef = useRef(null);
  const processHeadingRef = useRef(null);
  const processSubHeadingRef = useRef(null);
  const processStepsRef = useRef([]);
  const processStatementRef = useRef(null);

  const industriesSectionRef = useRef(null);
  const industriesHeadingRef = useRef(null);
  const industriesSubHeadingRef = useRef(null);
  const industriesCardsRef = useRef([]);
  const industriesTaglineRef = useRef(null);

  const whyChooseSectionRef = useRef(null);
  const whyChooseHeadingRef = useRef(null);
  const whyChooseParaRef = useRef(null);
  const whyChooseListRef = useRef([]);
  const whyChooseTaglineRef = useRef(null);
  const whyChooseImageRef = useRef(null);

  const futureSectionRef = useRef(null);
  const futureHeadingRef = useRef(null);
  const futurePara1Ref = useRef(null);
  const futurePara2Ref = useRef(null);
  const futureButtonRef = useRef(null);

  const ctaSectionRef = useRef(null);
  const ctaHeadingRef = useRef(null);
  const ctaPara1Ref = useRef(null);
  const ctaPara2Ref = useRef(null);
  const ctaButton1Ref = useRef(null);
  const ctaButton2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach(st => st.kill());

      const isMobile = window.innerWidth < 768;
      const baseDuration = isMobile ? 0.9 : 1.2;
      const baseY = isMobile ? 30 : 50;
      const staggerDelay = isMobile ? 0.1 : 0.15;
      const floatAmount = isMobile ? 4 : 8;
      const floatDuration = isMobile ? 3 : 2.5;

      // ----- HERO SECTION -----
      if (heroSectionRef.current) {
        gsap.set([heroHeadingRef.current, heroSubHeadingRef.current, heroParagraphRef.current, heroImageRef.current], {
          opacity: 0,
          y: baseY,
        });
        gsap.set(heroImageRef.current, { scale: 0.95 });

        const heroTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        heroTl
          .to(heroHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(heroSubHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, ease: "power2.out" }, "-=0.6")
          .to(heroParagraphRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, ease: "power2.out" }, "-=0.5")
          .to(heroImageRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.5");

        gsap.to(heroImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.5,
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- WHY BFSI NEEDS SPECIALIZED -----
      if (whySpecialSectionRef.current) {
        gsap.set([whySpecialHeadingRef.current, whySpecialParagraphRef.current, whySpecialBottomRef.current], { opacity: 0, y: baseY });
        gsap.set(whySpecialListRef.current, { opacity: 0, y: 20 });
        gsap.set(whySpecialImageRef.current, { opacity: 0, x: 50, scale: 0.95 });

        const specialTl = gsap.timeline({
          scrollTrigger: {
            trigger: whySpecialSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        specialTl
          .to(whySpecialHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(whySpecialParagraphRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(whySpecialListRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: staggerDelay, ease: "power2.out" }, "-=0.4")
          .to(whySpecialImageRef.current, { opacity: 1, x: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.8")
          .to(whySpecialBottomRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        gsap.to(whySpecialImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: whySpecialSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- SOLUTIONS SECTION (products grid and approach points) -----
      if (solutionsSectionRef.current) {
        gsap.set([solutionsHeadingRef.current, solutionsSubHeadingRef.current], { opacity: 0, y: baseY });
        gsap.set(productsGridRef.current, { opacity: 0, y: 40, scale: 0.95 });
        gsap.set(approachHeadingRef.current, { opacity: 0, y: baseY });
        gsap.set(approachPointsRef.current, { opacity: 0, y: 20 });
        gsap.set(approachStatementRef.current, { opacity: 0, y: 30 });

        const solTl = gsap.timeline({
          scrollTrigger: {
            trigger: solutionsSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        solTl
          .to(solutionsHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(solutionsSubHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(productsGridRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4")
          .to(approachHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, ease: "power2.out" }, "-=0.2")
          .to(approachPointsRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: staggerDelay, ease: "power2.out" }, "-=0.6")
          .to(approachStatementRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.3");

        productsGridRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount * 0.5,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: solutionsSectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
        approachPointsRef.current.forEach((point, i) => {
          if (point) {
            gsap.to(point, {
              y: -floatAmount * 0.5,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2.5 + i * 0.1,
              scrollTrigger: {
                trigger: solutionsSectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- SEO SECTION -----
      if (seoSectionRef.current) {
        gsap.set([seoHeadingRef.current, seoPara1Ref.current, seoPara2Ref.current, seoBottomRef.current], { opacity: 0, y: baseY });
        gsap.set(seoListRef.current, { opacity: 0, y: 20 });
        gsap.set(seoImageRef.current, { opacity: 0, x: -50, scale: 0.95 });

        const seoTl = gsap.timeline({
          scrollTrigger: {
            trigger: seoSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        seoTl
          .to(seoImageRef.current, { opacity: 1, x: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" })
          .to(seoHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.8")
          .to(seoPara1Ref.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.6")
          .to(seoListRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "power2.out" }, "-=0.4")
          .to(seoPara2Ref.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.2")
          .to(seoBottomRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.1");

        gsap.to(seoImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: seoSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- CONTENT MARKETING SECTION -----
      if (contentSectionRef.current) {
        gsap.set([contentHeadingRef.current, contentSubHeadingRef.current, contentBottomRef.current], { opacity: 0, y: baseY });
        gsap.set(contentCardsRef.current, { opacity: 0, y: 40, scale: 0.95 });
        gsap.set(contentImageRef.current, { opacity: 0, x: 50, scale: 0.95 });

        const contentTl = gsap.timeline({
          scrollTrigger: {
            trigger: contentSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        contentTl
          .to(contentHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(contentSubHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(contentCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4")
          .to(contentImageRef.current, { opacity: 1, x: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.8")
          .to(contentBottomRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        contentCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount * 0.6,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: contentSectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
        gsap.to(contentImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: contentSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- SOCIAL MEDIA SECTION -----
      if (socialSectionRef.current) {
        gsap.set([socialHeadingRef.current, socialPara1Ref.current, socialPara2Ref.current, socialTaglineRef.current], { opacity: 0, y: baseY });
        gsap.set(socialListRef.current, { opacity: 0, y: 20 });
        gsap.set(socialImageRef.current, { opacity: 0, x: 50, scale: 0.95 });

        const socialTl = gsap.timeline({
          scrollTrigger: {
            trigger: socialSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        socialTl
          .to(socialHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(socialPara1Ref.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(socialListRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "power2.out" }, "-=0.4")
          .to(socialImageRef.current, { opacity: 1, x: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.8")
          .to(socialPara2Ref.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.2")
          .to(socialTaglineRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.1");

        gsap.to(socialImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: socialSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- AUTOMATION SECTION -----
      if (automationSectionRef.current) {
        gsap.set([automationHeadingRef.current, automationTopParaRef.current, automationBottomParaRef.current], { opacity: 0, y: baseY });
        gsap.set(automationCardsRef.current, { opacity: 0, y: 40, scale: 0.95 });

        const autoTl = gsap.timeline({
          scrollTrigger: {
            trigger: automationSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        autoTl
          .to(automationHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(automationTopParaRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(automationCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4")
          .to(automationBottomParaRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        automationCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount * 0.5,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: automationSectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- CRO SECTION -----
      if (croSectionRef.current) {
        gsap.set([croHeadingRef.current, croPara1Ref.current, croTaglineRef.current], { opacity: 0, y: baseY });
        gsap.set(croListRef.current, { opacity: 0, y: 20 });
        gsap.set(croImageRef.current, { opacity: 0, x: 50, scale: 0.95 });

        const croTl = gsap.timeline({
          scrollTrigger: {
            trigger: croSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        croTl
          .to(croHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(croPara1Ref.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(croListRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "power2.out" }, "-=0.4")
          .to(croImageRef.current, { opacity: 1, x: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.8")
          .to(croTaglineRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        gsap.to(croImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: croSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- PROCESS SECTION -----
      if (processSectionRef.current) {
        gsap.set([processHeadingRef.current, processSubHeadingRef.current, processStatementRef.current], { opacity: 0, y: baseY });
        gsap.set(processStepsRef.current, { opacity: 0, y: 40, scale: 0.95 });

        const procTl = gsap.timeline({
          scrollTrigger: {
            trigger: processSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        procTl
          .to(processHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(processSubHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(processStepsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4")
          .to(processStatementRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        processStepsRef.current.forEach((step, i) => {
          if (step) {
            gsap.to(step, {
              y: -floatAmount * 0.5,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: processSectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- INDUSTRIES SECTION -----
      if (industriesSectionRef.current) {
        gsap.set([industriesHeadingRef.current, industriesSubHeadingRef.current, industriesTaglineRef.current], { opacity: 0, y: baseY });
        gsap.set(industriesCardsRef.current, { opacity: 0, y: 40, scale: 0.95 });

        const indTl = gsap.timeline({
          scrollTrigger: {
            trigger: industriesSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        indTl
          .to(industriesHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(industriesSubHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(industriesCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4")
          .to(industriesTaglineRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        industriesCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount * 0.5,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: industriesSectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- WHY CHOOSE US SECTION -----
      if (whyChooseSectionRef.current) {
        gsap.set([whyChooseHeadingRef.current, whyChooseParaRef.current, whyChooseTaglineRef.current], { opacity: 0, y: baseY });
        gsap.set(whyChooseListRef.current, { opacity: 0, y: 20 });
        gsap.set(whyChooseImageRef.current, { opacity: 0, x: 50, scale: 0.95 });

        const chooseTl = gsap.timeline({
          scrollTrigger: {
            trigger: whyChooseSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        chooseTl
          .to(whyChooseHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(whyChooseParaRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(whyChooseListRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "power2.out" }, "-=0.4")
          .to(whyChooseImageRef.current, { opacity: 1, x: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.8")
          .to(whyChooseTaglineRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        gsap.to(whyChooseImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: whyChooseSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- FUTURE SECTION -----
      if (futureSectionRef.current) {
        gsap.set([futureHeadingRef.current, futurePara1Ref.current, futurePara2Ref.current, futureButtonRef.current], {
          opacity: 0,
          y: baseY,
        });

        const futureTl = gsap.timeline({
          scrollTrigger: {
            trigger: futureSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        futureTl
          .to(futureHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(futurePara1Ref.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(futurePara2Ref.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.4")
          .to(futureButtonRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.3");
      }

      // ----- CTA SECTION -----
      if (ctaSectionRef.current) {
        gsap.set([ctaHeadingRef.current, ctaPara1Ref.current, ctaPara2Ref.current, ctaButton1Ref.current, ctaButton2Ref.current], {
          opacity: 0,
          y: baseY,
        });

        const ctaTl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        ctaTl
          .to(ctaHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(ctaPara1Ref.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(ctaPara2Ref.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.4")
          .to([ctaButton1Ref.current, ctaButton2Ref.current], { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.3");
      }

      ScrollTrigger.refresh();
    }, [
      heroSectionRef,
      whySpecialSectionRef,
      solutionsSectionRef,
      seoSectionRef,
      contentSectionRef,
      socialSectionRef,
      automationSectionRef,
      croSectionRef,
      processSectionRef,
      industriesSectionRef,
      whyChooseSectionRef,
      futureSectionRef,
      ctaSectionRef,
    ]);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={heroSectionRef}
        className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">
          <div className="text-left text-white">
            <h2 ref={heroHeadingRef} className="text-4xl md:text-4xl font-bold leading-tight text-white">
              BFSI Digital Marketing Services
            </h2>
            <h3 ref={heroSubHeadingRef} className="text-2xl md:text-xl font-semibold leading-snug">
              Accelerate Growth. Strengthen Trust. Lead the Digital-First Financial Era.
            </h3>
            <p ref={heroParagraphRef} className="text-white md:text-md leading-relaxed max-w-[600px]">
              The BFSI sector is evolving faster than ever. Customers expect seamless digital journeys, instant responses, data security, and personalized financial experiences.
              <br />
              <span className="text-white font-bold">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span> helps banks, NBFCs, fintech brands, insurance providers, and investment firms scale with performance-driven, compliance-ready digital marketing strategies.
              <br />
              We don’t just generate traffic — we build credibility, qualified leads, and long-term customer value.
            </p>
          </div>
          <div ref={heroImageRef} className="flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
              <img
                src={BFSIImage}
                alt="BFSI Digital Marketing"
                className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY BFSI NEEDS SPECIALIZED DIGITAL MARKETING */}
      <section ref={whySpecialSectionRef} className="bg-gradient-to-r from-gray-50 to-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 ref={whySpecialHeadingRef} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why BFSI Needs Specialized Digital Marketing
            </h2>
            <p ref={whySpecialParagraphRef} className="text-gray-600 leading-relaxed mb-6">
              Financial services marketing is not like any other industry. It demands:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "High-trust communication",
                "Regulatory compliance awareness",
                "Data-driven personalization",
                "Precision targeting",
                "Long conversion journey nurturing",
              ].map((item, idx) => (
                <li key={idx} ref={el => (whySpecialListRef.current[idx] = el)} className="flex items-start text-gray-700">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p ref={whySpecialBottomRef} className="text-gray-700 leading-relaxed">
              At <span className="font-semibold text-blue-700">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>, we design digital ecosystems tailored specifically for BFSI brands — 
              combining performance marketing, automation, analytics, and brand storytelling 
              into one measurable growth engine.
            </p>
          </div>
          <div ref={whySpecialImageRef}>
            <img
              src={WhyBFSINeedsSpecializedDigitalMarketingImage}
              alt="BFSI Digital Marketing Strategy"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* OUR BFSI DIGITAL MARKETING SOLUTIONS */}
      <section ref={solutionsSectionRef} className="bg-gray-50 py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 ref={solutionsHeadingRef} className="text-3xl md:text-4xl font-bold text-[#0a2540]">
              Our BFSI Digital Marketing Solutions
            </h2>
            <p ref={solutionsSubHeadingRef} className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Performance Marketing for Financial Lead Generation
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-semibold text-[#0a2540] mb-6 text-center">
              We Build ROI-Focused Campaigns For:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Home Loans",
                "Personal Loans",
                "Credit Cards",
                "Insurance Policies",
                "Investment Products",
                "Mutual Funds",
                "Fintech Apps",
              ].map((item, idx) => (
                <div
                  key={idx}
                  ref={el => (productsGridRef.current[idx] = el)}
                  className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-orange-500"></div>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                  <p className="relative font-semibold text-gray-700 text-center">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 ref={approachHeadingRef} className="text-xl font-semibold text-[#0a2540] mb-6 text-center">
              Our Strategic Approach Includes:
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Advanced audience segmentation",
                "Funnel-based campaign structuring",
                "AI-driven bidding strategies",
                "Landing page optimization",
                "Conversion rate optimization (CRO)",
                "Real-time campaign tracking",
              ].map((point, idx) => (
                <div
                  key={idx}
                  ref={el => (approachPointsRef.current[idx] = el)}
                  className="group relative flex items-start bg-white rounded-xl p-6 shadow-md overflow-hidden transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                  <span className="relative text-blue-600 font-bold mr-4 text-lg">✓</span>
                  <p className="relative text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={approachStatementRef} className="bg-[#0a2540] text-white text-center py-6 rounded-2xl shadow-lg">
            <p className="text-lg font-medium text-white">
              Every campaign is optimized for quality leads — not just clicks.
            </p>
          </div>
        </div>
      </section>

      {/* SEO FOR BFSI BRANDS */}
      <section ref={seoSectionRef} className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div ref={seoImageRef}>
            <img
              src={SEOforBFSIBrandsImage}
              alt="SEO for BFSI Brands"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
          <div>
            <h2 ref={seoHeadingRef} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              SEO for BFSI Brands
            </h2>
            <p ref={seoPara1Ref} className="text-gray-600 leading-relaxed mb-6">
              Search visibility is critical in finance. Customers research extensively before making decisions.
            </p>
            <p ref={seoPara2Ref} className="text-gray-700 mb-4 font-medium">
              Our BFSI SEO strategy focuses on:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "High-intent keyword targeting",
                "Authority-driven content marketing",
                "E-E-A-T optimization (Experience, Expertise, Authority, Trust)",
                "Technical SEO for secure and fast websites",
                "Structured data for financial products",
                "Local SEO for branch-based businesses",
              ].map((item, idx) => (
                <li key={idx} ref={el => (seoListRef.current[idx] = el)} className="flex items-start text-gray-700">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p ref={seoBottomRef} className="text-gray-800 leading-relaxed">
              At <span className="font-semibold text-blue-700">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>, we ensure your brand ranks not just higher — but smarter.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT MARKETING THAT BUILDS TRUST */}
      <section ref={contentSectionRef} className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 ref={contentHeadingRef} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Content Marketing That Builds Trust
            </h2>
            <p ref={contentSubHeadingRef} className="text-gray-600 max-w-3xl mx-auto">
              Financial decisions require confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Educational blogs",
                "Explainer guides",
                "Financial calculators content",
                "Case studies",
                "Whitepapers",
                "Investor-focused content",
                "Email nurture sequences",
              ].map((item, idx) => (
                <div
                  key={idx}
                  ref={el => (contentCardsRef.current[idx] = el)}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                >
                  <p className="font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
            <div ref={contentImageRef}>
              <img
                src={ContentMarketingThatBuildsTrustImage}
                alt="Financial Content Marketing"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
          <div ref={contentBottomRef} className="text-center max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our content framework focuses on 
              <span className="font-semibold text-blue-700"> clarity</span>, 
              <span className="font-semibold text-blue-700"> compliance</span>, and 
              <span className="font-semibold text-blue-700"> conversion</span>.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA & BRAND AUTHORITY */}
      <section ref={socialSectionRef} className="bg-gradient-to-r from-blue-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 ref={socialHeadingRef} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Social Media & Brand Authority
            </h2>
            <p ref={socialPara1Ref} className="text-gray-600 leading-relaxed mb-6">
              BFSI brands need credibility and transparency on social platforms.
            </p>
            <p ref={socialPara2Ref} className="text-gray-800 font-medium mb-4">
              We help you:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Build thought leadership",
                "Run performance ads on Meta, LinkedIn & Google",
                "Create fintech-focused content campaigns",
                "Launch awareness and lead gen campaigns",
                "Execute reputation management strategies",
              ].map((item, idx) => (
                <li key={idx} ref={el => (socialListRef.current[idx] = el)} className="flex items-start text-gray-700">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p ref={socialTaglineRef} className="text-lg font-semibold text-blue-700">
              Trust-building storytelling meets performance marketing.
            </p>
          </div>
          <div ref={socialImageRef} className="relative flex justify-center items-center">
            <img src={SocialMediaBrandAuthorityImage} alt="Social Media Brand Authority" />
          </div>
        </div>
      </section>

      {/* MARKETING AUTOMATION & LEAD NURTURING */}
      <section ref={automationSectionRef} className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 ref={automationHeadingRef} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Marketing Automation & Lead Nurturing
            </h2>
            <p ref={automationTopParaRef} className="text-gray-600 leading-relaxed mb-6">
              The BFSI sales cycle is long. Strategic automation ensures prospects 
              are nurtured with the right message at the right time.
            </p>
            <p ref={automationBottomParaRef} className="text-gray-800 leading-relaxed">
              At <span className="font-semibold text-blue-700">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>, we turn cold leads into loyal customers through strategic automation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "CRM Integration", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h10" /> },
              { title: "Email Automation Funnels", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" /> },
              { title: "WhatsApp Marketing Flows", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-4-7.5L21 3l-1.5 4A8.96 8.96 0 0121 12z" /> },
              { title: "AI-Powered Chatbots", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h4M4 6h16v12H4z" /> },
              { title: "Behavioral Retargeting", icon: <><circle cx="12" cy="12" r="9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" /></> },
              { title: "Lead Scoring Systems", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 17l-4-4 4-4M15 7l4 4-4 4" /> },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={el => (automationCardsRef.current[idx] = el)}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <p className="text-gray-800 font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONVERSION RATE OPTIMIZATION */}
      <section ref={croSectionRef} className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 ref={croHeadingRef} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Conversion Rate Optimization (CRO)
            </h2>
            <p ref={croPara1Ref} className="text-gray-600 leading-relaxed mb-6">
              Financial products demand clarity. We optimize:
            </p>
            <ul className="space-y-4 mb-6">
              {[
                "Landing page structures",
                "Call-to-action placement",
                "Form UX",
                "Mobile-first performance",
                "Trust badges & compliance signals",
                "A/B testing frameworks",
              ].map((item, idx) => (
                <li key={idx} ref={el => (croListRef.current[idx] = el)} className="flex items-start text-gray-700">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p ref={croTaglineRef} className="text-lg font-semibold text-blue-700">
              Because in BFSI, even a 1% increase in conversion can mean massive revenue growth.
            </p>
          </div>
          <div ref={croImageRef} className="flex justify-center">
            <img
              src={ConversionRateOptimizationImage}
              alt="Conversion rate optimization dashboard and analytics"
              className="rounded-2xl shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* OUR STRATEGIC APPROACH */}
      <section ref={processSectionRef} className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 ref={processHeadingRef} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Strategic Approach
            </h2>
            <p ref={processSubHeadingRef} className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured yet agile growth model:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              "Market & Compliance Research",
              "Audience & Persona Mapping",
              "Channel Strategy & Funnel Planning",
              "Creative & Content Deployment",
              "Performance Optimization",
              "Analytics & Revenue Tracking",
            ].map((step, idx) => (
              <div
                key={idx}
                ref={el => (processStepsRef.current[idx] = el)}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 relative"
              >
                <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold shadow-md">
                  {idx + 1}
                </div>
                <p className="text-gray-800 font-medium mt-6">{step}</p>
              </div>
            ))}
          </div>
          <div ref={processStatementRef} className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-800 font-medium leading-relaxed">
              Every strategy is backed by 
              <span className="text-blue-700 font-semibold"> data</span>, 
              powered by 
              <span className="text-blue-700 font-semibold"> creativity</span>, 
              and aligned with 
              <span className="text-blue-700 font-semibold"> measurable business goals</span>.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE IN BFSI */}
      <section ref={industriesSectionRef} className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 ref={industriesHeadingRef} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve in BFSI
            </h2>
            <p ref={industriesSubHeadingRef} className="text-gray-600 max-w-3xl mx-auto">
              Delivering growth-focused digital strategies across the entire financial ecosystem.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
            {[
              { title: "Retail Banking", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v9a2 2 0 01-2 2h-4v-6H9v6H5a2 2 0 01-2-2z" /> },
              { title: "Corporate Banking", icon: <><rect x="3" y="7" width="18" height="13" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" /></> },
              { title: "NBFCs", icon: <><circle cx="12" cy="12" r="9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" /></> },
              { title: "Insurance Providers", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" /> },
              { title: "Fintech Startups", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /> },
              { title: "Investment & Wealth Management Firms", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" /> },
              { title: "Microfinance Institutions", icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-3 0-5 1.5-5 4s2 4 5 4 5-1.5 5-4-2-4-5-4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 12h2M20 12h2" /></> },
            ].map((industry, idx) => (
              <div
                key={idx}
                ref={el => (industriesCardsRef.current[idx] = el)}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    {industry.icon}
                  </svg>
                </div>
                <p className="text-gray-800 font-semibold text-lg">{industry.title}</p>
              </div>
            ))}
          </div>
          <div ref={industriesTaglineRef} className="text-center">
            <p className="text-blue-700 font-semibold text-lg">
              Shaping the future of finance through digital excellence.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US FOR BFSI MARKETING */}
      <section ref={whyChooseSectionRef} className="bg-gradient-to-b from-white to-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 ref={whyChooseHeadingRef} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us for BFSI Marketing?
            </h2>
            <p ref={whyChooseParaRef} className="text-gray-700 text-lg leading-relaxed mb-8">
              At <span className="font-semibold text-blue-700">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>, we combine deep industry insight with cutting-edge digital tools 
              to create scalable growth systems for financial brands.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Performance-First Strategy",
                "Compliance-Conscious Campaigns",
                "Data-Driven Decision Making",
                "Transparent Reporting",
                "Dedicated Account Management",
                "ROI-Focused Execution",
              ].map((item, idx) => (
                <li key={idx} ref={el => (whyChooseListRef.current[idx] = el)} className="flex items-start text-gray-800">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p ref={whyChooseTaglineRef} className="text-blue-700 font-semibold text-lg">
              Shaping performance-driven growth for the future of finance.
            </p>
          </div>
          <div ref={whyChooseImageRef} className="flex justify-center">
            <img
              src={WhyChooseUsforBFSIMarketingImage}
              alt="Financial marketing strategy and analytics dashboard"
              className="rounded-2xl shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* THE FUTURE OF BFSI MARKETING IS DIGITAL */}
      <section ref={futureSectionRef} className="bg-gray-900 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 ref={futureHeadingRef} className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            The Future of BFSI Marketing Is 
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              {" "}Digital
            </span>
          </h2>
          <p ref={futurePara1Ref} className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
            Open banking, AI-driven underwriting, fintech disruption, and hyper-personalization 
            are redefining financial services. The brands that win are the ones that adapt faster.
          </p>
          <p ref={futurePara2Ref} className="text-white text-xl md:text-2xl font-semibold mb-10">
            Your customers are online. Your growth should be too.
          </p>
          <div ref={futureButtonRef}>
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg"
            >
              Book a Strategy Consultation
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section ref={ctaSectionRef} className="bg-gradient-to-r from-blue-800 to-indigo-800 py-16 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 ref={ctaHeadingRef} className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Let’s Build a High-Performance Financial Growth Engine
          </h2>
          <p ref={ctaPara1Ref} className="text-lg md:text-xl leading-relaxed mb-6 text-white">
            Partner with 
            <span className="font-bold"> Adkryoss managed by Clink Consultancy Services Private Limited </span> 
            and transform your BFSI marketing into a measurable, scalable, 
            and future-ready digital system.
          </p>
          <p ref={ctaPara2Ref} className="text-lg md:text-xl font-semibold mb-8 text-white">
            Ready to scale your financial brand? Let’s start today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              ref={ctaButton1Ref}
              onClick={() => navigate("/contact?service=bfsi")}
              className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
            >
              Schedule a Strategy Call
            </button>
            <button
              ref={ctaButton2Ref}
              onClick={() => navigate("/contact?service=bfsi")}
              className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition duration-300"
            >
              Request a Proposal
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BFSI;