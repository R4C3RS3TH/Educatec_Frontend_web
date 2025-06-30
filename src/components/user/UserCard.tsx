import React from 'react';
import { Carrera } from 'src/types/Carrera';
import { Roles } from 'src/types/Roles';
import { cn } from 'src/utils/cn'; 
import { Badge } from '../ui/badge';

export interface UserCardProps {
  nombre: string;
  correo: string;
  carrera: Carrera;
  horario?: string;
  rol: Roles[]; 
  className?: string;
}

const UserCard: React.FC<UserCardProps> = ({
  nombre,
  correo,
  carrera,
  rol,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-white shadow-md rounded-2xl p-6 border space-y-2',
        className,
      )}
    >
      <h3 className="text-xl font-semibold text-primary">{nombre}</h3>
      <p className="text-sm text-gray-600">{correo}</p>
      <p className="text-sm text-gray-600">
        Carrera: <span className="font-medium">{carrera.replace(/_/g, ' ')}</span>
      </p>
      <div className="flex flex-wrap gap-2 pt-2">
        {rol.map((r) => (
          <Badge key={r} variant="secondary">
            {r}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
