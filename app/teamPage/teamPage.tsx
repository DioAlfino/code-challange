"use client";
import React, { useEffect, useState, useCallback, memo } from "react";

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  picture: string;
  location: string;
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = memo(({ member }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <img
      src={member.picture}
      alt={member.name}
      className="w-32 h-32 rounded-full mx-auto mb-4"
      loading="lazy"
    />
    <h2 className="text-xl font-semibold text-center">{member.name}</h2>
    <p className="text-center text-gray-600">{member.location}</p>
    <div className="mt-4">
      <p className="text-gray-800">Email: {member.email}</p>
      <p className="text-gray-800">Phone: {member.phone}</p>
    </div>
  </div>
));

const Teams: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTeamMembers = useCallback(async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=9");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      const members = data.results.map((user: any) => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
        picture: user.picture.large,
        location: `${user.location.city}, ${user.location.country}`,
      }));
      setTeamMembers(members);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTeamMembers();
  }, [fetchTeamMembers]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
