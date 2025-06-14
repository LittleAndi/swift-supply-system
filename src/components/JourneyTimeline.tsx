
import { Truck, Ship, Train, MapPin, CheckCircle, Clock, AlertCircle } from "lucide-react";

interface JourneySegment {
  id: string;
  mode: "Ship" | "Truck" | "Train";
  origin: string;
  destination: string;
  status: "Completed" | "In Progress" | "Pending" | "Delayed";
  estimatedDuration: string;
  actualDuration?: string;
}

interface JourneyTimelineProps {
  segments: JourneySegment[];
  currentSegment: number;
}

function getModeIcon(mode: "Ship" | "Truck" | "Train") {
  if (mode === "Truck") return <Truck size={16} className="text-gray-700" />;
  if (mode === "Ship") return <Ship size={16} className="text-blue-700" />;
  return <Train size={16} className="text-orange-500" />;
}

function getStatusIcon(status: string, isActive: boolean) {
  if (status === "Completed") return <CheckCircle size={16} className="text-green-500" />;
  if (status === "In Progress" && isActive) return <Clock size={16} className="text-blue-500 animate-pulse" />;
  if (status === "Delayed") return <AlertCircle size={16} className="text-red-500" />;
  return <Clock size={16} className="text-gray-400" />;
}

function getStatusColor(status: string, isActive: boolean) {
  if (status === "Completed") return "bg-green-100 text-green-700 border-green-200";
  if (status === "In Progress" && isActive) return "bg-blue-100 text-blue-700 border-blue-200";
  if (status === "Delayed") return "bg-red-100 text-red-700 border-red-200";
  return "bg-gray-100 text-gray-600 border-gray-200";
}

export default function JourneyTimeline({ segments, currentSegment }: JourneyTimelineProps) {
  return (
    <div className="py-4">
      <div className="space-y-4">
        {segments.map((segment, index) => {
          const isActive = index === currentSegment;
          const isCompleted = index < currentSegment;
          
          return (
            <div key={segment.id} className="flex items-start gap-4">
              {/* Timeline connector */}
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                  isCompleted ? 'bg-green-100 border-green-300' : 
                  isActive ? 'bg-blue-100 border-blue-300' : 
                  'bg-gray-100 border-gray-300'
                }`}>
                  {getModeIcon(segment.mode)}
                </div>
                {index < segments.length - 1 && (
                  <div className={`w-0.5 h-12 ${
                    isCompleted ? 'bg-green-300' : 'bg-gray-300'
                  }`} />
                )}
              </div>

              {/* Segment details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-sm">{segment.mode} Transport</span>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs border ${getStatusColor(segment.status, isActive)}`}>
                    {getStatusIcon(segment.status, isActive)}
                    {segment.status}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <MapPin size={14} />
                  <span>{segment.origin}</span>
                  <span>→</span>
                  <span>{segment.destination}</span>
                </div>
                
                <div className="text-xs text-gray-500">
                  Duration: {segment.actualDuration || segment.estimatedDuration}
                  {segment.actualDuration && segment.actualDuration !== segment.estimatedDuration && (
                    <span className="text-gray-400"> (est. {segment.estimatedDuration})</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
