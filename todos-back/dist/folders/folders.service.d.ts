import { Repository } from 'typeorm';
import { Folder } from './folder.entity';
export declare class FoldersService {
    private readonly folderRepository;
    constructor(folderRepository: Repository<Folder>);
    postF(folder: any): Promise<Folder[]>;
    getAllF(): Promise<Folder[]>;
    getByIdF(id: number): Promise<Folder>;
}
