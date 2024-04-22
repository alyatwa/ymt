interface Category {
  id: number;
  title: string;
  image: string;
  need_license: number;
  lawyers_count: number;
}

interface Specialty {
  id: number;
  title: string;
}

interface Degree {
  id: number;
  title: string;
  need_certificate: number;
}

interface Country {
  id: number;
  name: string;
}

interface City {
  id: number;
  title: string;
}

interface FunctionalCase {
  id: number;
  title: string;
}

interface Section {
  id: number;
  title: string;
  image: string;
  need_license: number;
  lawyers_count: number;
}

interface SectionDetails {
  id: number;
  section: Section;
  lawyer_license_no: string | null;
  lawyer_license_file: string | null;
}

interface Importance {
  id: number;
  title: string;
}

interface LawyerPrice {
  price: number;
  importance: Importance;
}

interface Service {
  service_id: number;
  category_id: number | null;
  request_level_id: number | null;
  title: string;
  image: string;
  intro: string;
  details: string | null;
  slug: string;
  section_id: number;
  min_price: number;
  max_price: number;
  sections: string;
  ymtaz_price: number;
  status: number;
  need_appointment: number;
  lawyer_prices: LawyerPrice[];
}

interface Profile {
  id: number;
  first_name: string;
  second_name: string;
  third_name: string | null;
  fourth_name: string;
  name: string;
  email: string;
  phone: string;
  phone_code: string;
  about: string;
  accurate_specialty: Specialty;
  general_specialty: Specialty;
  degree: Degree;
  gender: string;
  day: string;
  month: string;
  year: string;
  birthday: string;
  nationality: Country;
  country: Country;
  region: City;
  city: City;
  longitude: string;
  latitude: string;
  type: number;
  identity_type: number;
  nat_id: string;
  functional_cases: FunctionalCase;
  company_lisences_no: string | null;
  company_name: string | null;
  office_request_status: number;
  office_request_from: string | null;
  office_request_to: string | null;
  is_favorite: number;
  special: number;
  logo: string;
  id_file: string;
  cv: string;
  degree_certificate: string | null;
  photo: string;
  company_lisences_file: string | null;
  accept_rules: number;
  sections: SectionDetails[];
  services: Service[];
  work_times: any[];
  rates_count: number | null;
  rates_avg: number | null;
  digital_guide_subscription: number;
  digital_guide_subscription_payment_status: number;
  accepted: number;
}
