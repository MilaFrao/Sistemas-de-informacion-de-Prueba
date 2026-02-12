import { IsString, IsNotEmpty, MaxLength, IsOptional, IsInt, Min, IsDateString, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

<<<<<<< HEAD
=======


>>>>>>> 16c1a19 (Bastantes Progresos)
export class CrearTareaDTO {

  @IsInt()
  @Type(() => Number)
  id!: number; // ID manual (decisión del equipo)

  @IsString()
  @IsNotEmpty()
  titulo!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  story_points?: number;

  @IsOptional()
  @IsDateString()
  fecha_entrega?: string;

  @IsInt()
  @Type(() => Number)
  id_usuario_asignado!: number;
<<<<<<< HEAD

<<<<<<< HEAD
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  categorias?: number[];
=======
>>>>>>> 16c1a19 (Bastantes Progresos)

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  categorias?: number[];
=======
  @Type(() => Number)
  @IsNotEmpty()
  @IsInt()
  id_usuario_asignado?: number;

>>>>>>> 865ca3b (commit)
}

