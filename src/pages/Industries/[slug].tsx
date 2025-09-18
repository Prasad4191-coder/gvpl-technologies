import { useParams } from 'react-router-dom';
import { industries } from '../../data/industries';
import IndustryPage from './IndustryPage';

export default function IndustryDynamic() {
  const { slug } = useParams();
  const industry = industries.find(i => i.slug === slug);
  if (!industry) return <div className="text-center py-20 text-2xl">Industry Not Found</div>;
  return <IndustryPage {...industry} />;
} 