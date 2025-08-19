import React from "react";
import Container from "../layouts/Container";
import { Link } from "react-router-dom";
import { privacyData, privacyContactInfo } from "../data/Legal/PrivacyData";

const Privacy = () => {
  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((paragraph, index) => (
        <p key={index} className="text-Grey-60 leading-relaxed mb-4">
          {paragraph}
        </p>
      ));
    }
    return <p className="text-Grey-60 leading-relaxed mb-4">{content}</p>;
  };

  const renderSubsections = (subsections: { title: string; content: string | string[] }[]) => {
    return subsections.map((subsection, index) => (
      <div key={index} className="mb-6">
        <h3 className="text-xl font-medium mb-3 text-White">
          {subsection.title}
        </h3>
        {Array.isArray(subsection.content) ? (
          <ul className="list-disc list-inside text-Grey-60 space-y-2 ml-4">
            {subsection.content.map((item: string, itemIndex: number) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-Grey-60 leading-relaxed">{subsection.content}</p>
        )}
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-Grey-08 text-White mt-[68px] lg:mt-[77px] xl:mt-[99px]">
      {/* Header with neon effect */}
      <div className="border-b border-Grey-15 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-Purple-60/10 via-transparent to-Purple-60/10 animate-pulse"></div>
        <Container className="py-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-urbanist mb-4 animate-neon">
              Privacy Policy
            </h2>
            <p className="text-Grey-60 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container className="py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {privacyData.map((section) => (
            <section key={section.id} className="group">
              <h2 className="text-2xl font-semibold mb-4 font-urbanist group-hover:text-Purple-60 transition-colors duration-300">
                {section.title}
              </h2>
              
              {section.subsections ? (
                <div>
                  {renderContent(section.content)}
                  {renderSubsections(section.subsections)}
                </div>
              ) : (
                <div>
                  {renderContent(section.content)}
                </div>
              )}

              {/* Neon border effect on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-Purple-60/20 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
            </section>
          ))}

          {/* Contact Information with neon glow */}
          <section className="group">
            <div className="bg-Grey-15 rounded-lg p-6 space-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-Purple-60/5 via-transparent to-Purple-60/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <p className="text-White font-semibold">{privacyContactInfo.company}</p>
                <p className="text-Grey-60">Email: {privacyContactInfo.email}</p>
                <p className="text-Grey-60">Phone: {privacyContactInfo.phone}</p>
                <p className="text-Grey-60">Address: {privacyContactInfo.address}</p>
                <p className="text-Grey-60">Data Protection Officer: {privacyContactInfo.dpo}</p>
              </div>
            </div>
          </section>

          {/* Back to Home with neon button */}
          <div className="text-center pt-8 border-t border-Grey-15">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-Purple-60 text-White rounded-lg hover:bg-Purple-65 transition-all duration-300 font-medium relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-Purple-60 to-Purple-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">← Back to Home</span>
              <div className="absolute inset-0 border border-Purple-60/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Privacy;
